import {Student} from '../models/student.js'

export const getStudents = (req, res) => {
    Student.find().then((students) => {
        res.send(students)
    })
}

export const getStudent = (req, res) => {
    const {id} = req.params
    Student.findById(id).then((student) => {
        res.send(student)
    })
}

export const createStudent = (req, res) => {
    const {firstName, lastName, yearGroup, gender, generalNotes, generalReport} = req.body
    const student = new Student({firstName, lastName, yearGroup, gender, generalNotes, generalReport});
    student.save().then((savedStudent) => {
        res.send(savedStudent)
    })
}

export const deleteStudent = (req, res) => {
    const {id} = req.params
    Student.findByIdAndDelete(id).then(() => {
        res.send({status: 'success'})
    })
}

export const editStudent = (req, res) => {
    const {firstName, lastName, generalNotes, generalReport} = req.body
    const {id} = req.params
    Student.findById(id)
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

