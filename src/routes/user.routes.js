import { Router } from 'express'
import { createUser, getUser, authUser, deleteUser, updateUser } from '../controllers/user.controller.js'

const router = Router()

// Users routing

/**
 * @openapi
 * /api/user:
 *   post:
 *     tags:
 *      - Users
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: Holi.
 */
router.post('/', createUser)

/**
 * @openapi
 * /api/user:
 *   get:
 *     tags:
 *      - Users
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: Holi.
 */
router.get('/:userId', getUser)

/**
 * @openapi
 * /api/user:
 *   put:
 *     tags:
 *      - Users
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: Holi.
 */
router.put('/', updateUser)

/**
 * @openapi
 * /api/user:
 *   delete:
 *     tags:
 *      - Users
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: Holi.
 */
router.delete('/:userId', deleteUser)

/**
 * @openapi
 * /api/user/auth:
 *   get:
 *     tags:
 *      - Users
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: Holi.
 */
router.post('/auth', authUser)

export default router
