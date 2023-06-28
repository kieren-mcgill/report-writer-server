import mongoose from 'mongoose';

const todosSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  isDone: {
    type: Boolean,
    required: true,
  },
});

export const Todo = mongoose.models.Todo || mongoose.model('Todo', todosSchema);
