import express from 'express';
import { changeDoneStatus, createTodo, deleteTodo, getTodos } from '../controllers/todos-controller.js';

const todoRouter = express.Router();

todoRouter.get('/', getTodos);
todoRouter.post('/', createTodo);
todoRouter.delete('/:id', deleteTodo);
todoRouter.patch('/:id/change-done-status', changeDoneStatus);

export default todoRouter;