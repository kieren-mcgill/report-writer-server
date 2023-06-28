import express from 'express';
import dotenv from 'dotenv';
import { join } from 'path';

import todoRouter from './routers/todos-router.js';
import mongoose from 'mongoose';

dotenv.config({
  path: join(process.cwd(), 'development.env')
});

const app = express();

app.use(express.json());

app.use('/todos', todoRouter);

app.use((req, res) => {
  res.statusCode = 404;
  res.send('Route not found');
});

const PORT = 3000;

mongoose.connect(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}).then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
})