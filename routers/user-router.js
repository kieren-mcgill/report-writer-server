import express from 'express'

import {
    getUser,
    createUser,
    deleteUser,
    editUser


} from '../controllers/users-controller.js'

const userRouter = express.Router()

userRouter.get('/:username', getUser)
userRouter.post('/', createUser)
userRouter.delete('/:userId', deleteUser)
userRouter.patch('/:userId', editUser)

export default userRouter