import {User} from '../models/user.js'
import {Student} from "../models/student.js";

export const getUser = (req, res) => {
    const {username} = req.params
    User.find({username}).then((user) => {
        res.send(user[0])
    })
}

export const createUser = (req, res) => {
    const {username, password, organisation} = req.body
    const user = new User({username, password, organisation});
    user.save().then((savedUser) => {
        res.send(savedUser)
    })
}

export const deleteUser = (req, res) => {
    const {userId} = req.params
    User.findByIdAndDelete(userId).then(() => {
        res.send({status: 'success'})
    })
}

export const editUser = (req, res) => {
    const {username, password, organisation} = req.body
    const {userId} = req.params
    Student.findById(userId)
        .then((user) => {
            user.username = username;
            user.password = password;
            user.organisation = organisation;
            return user.save();
        })
        .then((savedUser) => {
            res.send(savedUser);
        })
}

