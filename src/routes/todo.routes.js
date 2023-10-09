import { Router } from 'express';
import { createTodo, deleteTodo, updateTodo, getTodos } from '../controllers/todo.controller.js';

const router = Router();

// Todos routing
router.post('/', createTodo);
router.get('/', getTodos);
router.put('/', updateTodo);
router.delete('/:todoId', deleteTodo);

export default router;