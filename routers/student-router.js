import express from 'express'
import {
    createStudent,
    deleteStudent,
    editStudent,
    getStudents,
} from '../controllers/students-controller.js'

const studentRouter = express.Router()

studentRouter.get('/:userId', getStudents)
studentRouter.post('/', createStudent)
studentRouter.delete('/:studentId', deleteStudent)
studentRouter.patch('/:studentId', editStudent)

export default studentRouter