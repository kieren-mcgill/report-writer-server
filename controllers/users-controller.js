import {User} from '../models/user.js'

export const getUser = (req, res) => {
    const {username} = req.params
    User.find({username}).then((user) => {
        res.send(user)
    })
}

export const createUser = (req, res) => {
    const {username, password} = req.body
    const user = new User({username, password});
    user.save().then((savedUser) => {
        res.send(savedUser)
    })
}

export const deleteUser = (req, res) => {
    const {id} = req.params
    User.findByIdAndDelete(id).then(() => {
        res.send({status: 'success'})
    })
}

export const linkStudent = (req, res) => {
    const {id} = req.params
    const {studentId} = req.body
    User.findById(id)
        .then((linkedUser) => {
            linkedUser.linkedStudents = [...linkedUser.linkedStudents, studentId]
            return linkedUser.save()
        })
        .then((linkedUser) => {
            res.send(linkedUser)
        })
}