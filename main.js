import express from 'express'
import dotenv from 'dotenv'
import { join } from 'path'
import studentRouter from './routers/student-router.js'
import userRouter from './routers/user-router.js'
import generateRouter from './routers/generate-router.js'
import mongoose from 'mongoose'

dotenv.config({
  path: join(process.cwd(), '.env')
})

const app = express()

app.use(express.json())

app.use('/students', studentRouter)

app.use('/users', userRouter)

app.use('/generate', generateRouter)

app.use((req, res) => {
  res.statusCode = 404
  res.send('Route not found')
})

const PORT = 3000

mongoose.connect(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}).then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
  })
})
