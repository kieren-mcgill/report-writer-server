import {Student} from '../models/student.js'
import {User} from "../models/user.js"

export const getStudents = (req, res) => {
    const {userId} = req.params
    User.findById(userId).populate('students')
        .then((foundUser) => {
            if (!foundUser) {
                return res.status(404).json({message: "There was a problem finding students for this user"})
            }
            res.send(foundUser.students)
        }).catch((error) => {
        res.status(500).json({message: "Sorry, something's gone wrong"})
    })
}

export const createStudent = (req, res) => {
    const {userId} = req.params
    const {
        firstName,
        lastName,
        yearGroup,
        gender,
        generalNotes,
        generalReport
    } = req.body
    const student = new Student({
        firstName,
        lastName,
        yearGroup,
        gender,
        generalNotes,
        generalReport
    })
    student.save()
        .then((savedStudent) => {
            User.findById(userId)
                .then((foundUser) => {
                    if (!foundUser) {
                        res.status(404).json({ message: "Sorry, I can't find a user for this student" });
                    }
                    foundUser.students.push(savedStudent._id)
                    foundUser.save()
                })
        }).then(() => res.send({message: `new student ${firstName} ${lastName} has been created`}))
        .catch((error) => {
            res.status(500).json({ message: "Sorry, something's gone wrong" })
        })
}

export const deleteStudent = (req, res) => {
    const {userId, studentId} = req.params
    Student.findByIdAndDelete(studentId)
        .then(() => {
            User.findById(userId)
                .then((foundUser) => {
                    if (!foundUser) {
                        res.status(404).json({message: "User not found"})
                    }
                    foundUser.students = foundUser.students.filter((student) => student.toString() !== studentId)
                    foundUser.save()
                }).then(() => res.send({message: `The student has been deleted`}))
        })
        .catch((error) => {
            res.status(500).json({ message: "Sorry, something's gone wrong" })
        })
}

export const editStudent = (req, res) => {
    const {generalNotes, generalReport} = req.body
    const {studentId} = req.params
    Student.findById(studentId)
        .then((student) => {
            if (!student) {
                return res.status(404).json({message: "Student not found"})
            }
            if (generalNotes !== undefined) {
                student.generalNotes = generalNotes
            }
            if (generalReport !== undefined) {
                student.generalReport = generalReport
            }
            return student.save()
        })
        .then(() => {
            res.send({message: `The student's ${generalNotes ? 'notes have' : 'report has'} been updated`})
        })
        .catch((error) => {
            res.status(500).json({ message: "Sorry, something's gone wrong" })
        })
}

