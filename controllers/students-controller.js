import {Student} from '../models/student.js'

export const getStudents = (req, res) => {
    const { userId } = req.params
    Student.find({userId})
        .then((students) => {
        res.send(students)
    })
}

export const createStudent = (req, res) => {
    const {
        firstName,
        lastName,
        yearGroup,
        gender,
        generalNotes,
        generalReport,
        userId
    } = req.body
    const student = new Student({
        firstName,
        lastName,
        yearGroup,
        gender,
        generalNotes,
        generalReport,
        userId
    })
    student.save()
        .then(() => {
            res.send({status: `new student ${firstName} ${lastName} has been created`})
        })
}

export const deleteStudent = (req, res) => {
    const { studentId } = req.params
    Student.findByIdAndDelete(studentId)
        .then(() => {
        res.send({status: `student: ${studentId} has been deleted`})
    })
}

export const editStudent = (req, res) => {
    const {generalNotes, generalReport} = req.body
    const {studentId} = req.params
    Student.findById(studentId)
        .then((student) => {
            if (generalNotes) {
                student.generalNotes = generalNotes
            }
            if (generalReport) {
            student.generalReport = generalReport
            }
            return student.save();
        })
        .then(() => {
            res.send({status: `student: ${studentId} has been edited`})
        })
}

