import {User} from '../models/user.js'
import {Student} from "../models/student.js"


export const getUser = (req, res) => {
    const { userId } = req.params
    User.findById(userId).then((user) => {
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        res.send(user)
    })
        .catch((error) => {
            res.status(500).json({ message: "Sorry, something's gone wrong" })
        })
}

export const deleteUser = (req, res) => {
    const {userId} = req.params
    User.findByIdAndDelete(userId).then(() => {
        res.send({message: 'user deleted'})
    })
        .catch((error) => {
            res.status(500).json({ message: "Sorry, something's gone wrong" })
        })
}

export const editUser = (req, res) => {
    const {username, password, organisation, yearGroup} = req.body
    const {userId} = req.params
    Student.findById(userId)
        .then((user) => {
            if(!user) {
                return res.status(404).json({message: "User not found"})
            }
            user.username = username
            user.password = password
            user.organisation = organisation
            user.yearGroup = yearGroup
            return user.save()
        })
        .then((savedUser) => {
            res.send(savedUser)
        })
        .catch((error) => {
            res.status(500).json({ message: "Sorry, something's gone wrong" })
        })
}

