import { Todo } from '../models/todo.js';

export const getTodos = (req, res) => {
  Todo.find().then((todos) => { res.send(todos); });
};

export const createTodo = (req, res) => {
  const { text, isDone } = req.body;
  const todo = new Todo({ text, isDone });
  todo.save().then((savedTodo) => { res.send(savedTodo);  });
};

export const deleteTodo = (req, res) => {
  const { id } = req.params;
  Todo.findByIdAndDelete(id).then(() => {
    res.send({ status: 'success' });
  });
};

export const changeDoneStatus = (req, res) => {
  const { id } = req.params;
  Todo.findById(id)
    .then((todo) => {
      todo.isDone = !todo.isDone;
      return todo.save()
    })
    .then((updatedTodo) => { res.send(updatedTodo) });
};