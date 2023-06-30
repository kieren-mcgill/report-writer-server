import express from 'express'
import {
    createStudent,
    deleteStudent,
    editStudent,
    getStudent,
    getStudents,
} from '../controllers/students-controller.js'

const studentRouter = express.Router()

studentRouter.get('/', getStudents)
studentRouter.get('/:studentId', getStudent)
studentRouter.post('/', createStudent)
studentRouter.delete('/:studentId', deleteStudent)
studentRouter.patch('/:studentId', editStudent)

export default studentRouter