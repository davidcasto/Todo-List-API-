const Todo = require('../models/todoModel')

// GET /todos — get all todos
const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find()
    res.json({ success: true, count: todos.length, data: todos })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
}

// GET /todos/:id — get single todo
const getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id)
    if (!todo) {
      return res.status(404).json({ success: false, message: 'Todo not found' })
    }
    res.json({ success: true, data: todo })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
}

// POST /todos — create new todo
const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body
    const todo = await Todo.create({ title, description })
    res.status(201).json({ success: true, data: todo })
  } catch (err) {
    res.status(400).json({ success: false, message: err.message })
  }
}

// PUT /todos/:id — update todo
const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )
    if (!todo) {
      return res.status(404).json({ success: false, message: 'Todo not found' })
    }
    res.json({ success: true, data: todo })
  } catch (err) {
    res.status(400).json({ success: false, message: err.message })
  }
}

// DELETE /todos/:id — delete todo
const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id)
    if (!todo) {
      return res.status(404).json({ success: false, message: 'Todo not found' })
    }
    res.json({ success: true, message: 'Todo deleted' })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
}

module.exports = { getAllTodos, getTodoById, createTodo, updateTodo, deleteTodo }