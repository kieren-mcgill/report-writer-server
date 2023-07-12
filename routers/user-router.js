import express from 'express'

import {
    getUser,
    deleteUser,
    editUser,

} from '../controllers/users-controller.js'

const userRouter = express.Router()

userRouter.get('/:userId', getUser)
userRouter.delete('/:userId', deleteUser)
userRouter.patch('/:userId', editUser)

export default userRouter