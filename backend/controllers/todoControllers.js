import { Todo } from "../models/todo.model.js"

// Get all Todos
const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    return res.status(200).json({todos});
  } catch (error) {
    return res.status(500).json({message: "Failed to fetch data", error});
  }
}

// Create Todo
const createTodo = async (req, res) => {
  try {
    const {todo} = req.body;

    if(!todo) {
      return res.status(400).json({message: "Todo is required"});
    }

    const task = new Todo({todo});
    await task.save();
    return res.status(201).json(task);

  } catch (error) {
    return res.status(500).json({message: "Failed to add todo", error});
  }
}

// Delete todo
const deleteTodo = async (req, res) => {
  try {
    const {id} = req.params;
    const todo = await Todo.findByIdAndDelete(id);

    if(!todo) {
      return res.status(404).json({message: "Todo is not found"});
    }

    return res.status(200).json({message: "Successfully deleted"});

  } catch (error) {
    return res.status(500).json({message: "Failed to delete task", error});
  }
}

export {getTodos, createTodo, deleteTodo}