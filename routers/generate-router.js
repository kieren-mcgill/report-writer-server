import express from "express";
import { generateReport } from '../controllers/generate-controller.js'

const generateRouter = express.Router()

generateRouter.post('/', generateReport)

export default generateRouter