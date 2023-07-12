import express from "express";

import {
    createUser,
    login
}
    from "../controllers/gateway-controller.js";


const gatewayRouter = express.Router()

gatewayRouter.post('/signup', createUser)
gatewayRouter.post('/login', login)

export default gatewayRouter