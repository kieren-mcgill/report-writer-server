import express from 'express'
import {
    createStudent,
    deleteStudent,
    editStudent,
    getStudents,
} from '../controllers/students-controller.js'

const studentRouter = express.Router()

studentRouter.get('/:userId', getStudents)
studentRouter.post('/:userId', createStudent)
studentRouter.delete('/:userId/:studentId', deleteStudent)
studentRouter.patch('/:userId/:studentId', editStudent)

export default studentRouter