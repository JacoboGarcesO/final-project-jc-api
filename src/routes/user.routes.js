import { Router } from 'express';
import { createUser, getUser, authUser, deleteUser, updateUser } from '../controllers/user.controller.js';

const router = Router();

// Users routing
router.post('/', createUser);
router.get('/:userId', getUser);
router.put('/', updateUser);
router.delete('/:userId', deleteUser);
router.post('/auth', authUser);

export default router;