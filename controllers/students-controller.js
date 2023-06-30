import {Student} from '../models/student.js'

export const getStudents = (req, res) => {
    const { userId } = req.body
    Student.find({userId})
        .then((students) => {
        res.send(students)
    })
}

export const getStudent = (req, res) => {
    const { studentId } = req.params
    Student.findById(studentId)
        .then((student) => {
        res.send(student)
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
        .then((savedStudent) => {
        res.send(savedStudent)
    })
}

export const deleteStudent = (req, res) => {
    const { studentId } = req.params
    Student.findByIdAndDelete(studentId)
        .then(() => {
        res.send({status: 'success'})
    })
}

export const editStudent = (req, res) => {
    const {firstName, lastName, generalNotes, generalReport} = req.body
    const {studentId} = req.params
    Student.findById(studentId)
        .then((student) => {
            student.firstName = firstName;
            student.lastName = lastName;
            student.generalNotes = generalNotes;
            student.generalReport = generalReport;
            return student.save();
        })
        .then((savedStudent) => {
            res.send(savedStudent);
        })
}

