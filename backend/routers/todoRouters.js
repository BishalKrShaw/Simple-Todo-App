import express from 'express'
import { createTodo, deleteTodo, getTodos } from '../controllers/todoControllers.js';

const router = express.Router();

router.get("/", getTodos);
router.post("/", createTodo);
router.delete("/:id", deleteTodo);

export default router;