import express from 'express'

import {
    getUser,
    createUser,
    deleteUser,
    linkStudent


} from '../controllers/users-controller.js'

const userRouter = express.Router()

userRouter.get('/:username', getUser)
userRouter.post('/', createUser)
userRouter.delete('/:id', deleteUser)
userRouter.patch('/:id', linkStudent)

export default userRouter