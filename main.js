import express from 'express'
import dotenv from 'dotenv'
import cors from "cors"
import { join } from 'path'
import studentRouter from './routers/student-router.js'
import userRouter from './routers/user-router.js'
import generateRouter from './routers/generate-router.js'
import gatewayRouter from './routers/gateway-router.js'
import mongoose from 'mongoose'

dotenv.config({
  path: join(process.cwd(), '.env')
})

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(cors());
}

app.use(express.json())

app.use('/gateway', gatewayRouter)

//Auth goes here

app.use('/students', studentRouter)

app.use('/users', userRouter)

app.use('/generate', generateRouter)

app.use((req, res) => {
  res.statusCode = 404
  res.send('Route not found')
})

const PORT = process.env.PORT || 3000

mongoose.connect(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}).then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
  })
})
