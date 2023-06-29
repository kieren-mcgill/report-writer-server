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
studentRouter.get('/:id', getStudent)
studentRouter.post('/', createStudent)
studentRouter.delete('/:id', deleteStudent)
studentRouter.patch('/:id', editStudent)

export default studentRouter