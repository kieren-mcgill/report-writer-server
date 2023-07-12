import {User} from "../models/user.js"
import { v4 as uuid } from "uuid"

export const createUser = (req, res) => {
    const {username, password, organisation, yearGroup} = req.body
    const user = new User({username, password, organisation, yearGroup, token: uuid()})
    user.save().then((savedUser) => {
        res.send(savedUser)
    }).catch((error) => {
        res.status(500).json({message: "Sorry, something's gone wrong"})
    })
}

export const login = (req, res) => {

    const { username, password } = req.body

    User.findOne({ username }).then((user) => {
        if (!user) {
            return res.status(404).json({ message: "Username not found" })
        }
        if (user.password !== password) {
            return res.status(401).json({ message: "Incorrect password" })
        }
        user.token = uuid()
        res.send(user)
    }).catch((error) => {
        res.status(500).json({ message: "Sorry, something's gone wrong" })
    })
}