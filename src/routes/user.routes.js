import { Router } from 'express'
import { createUser, getUser, authUser, deleteUser, updateUser } from '../controllers/user.controller.js'

const router = Router()

/**
 * @openapi
 * /api/user:
 *   post:
 *     summary: Create User
 *     tags:
 *      - Users
 *     requestBody:
 *      content:
 *        application/json:
 *          schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: Jhon
 *               lastName:
 *                 type: string
 *                 example: Doe
 *               email:
 *                 type: string
 *                 example: jhondoe@email.com
 *               password:
 *                 type: sring
 *                 example: pass123
 *      required: true
 *     responses:
 *       200:
 *         description: Successful User creation
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *                properties:
 *                  _id:
 *                    type: string
 *                    example: 651256e19c46e35b73b61588
 *                  firstName:
 *                    type: string
 *                    example: Jhon
 *                  lastName:
 *                    type: string
 *                    example: Doe
 *                  email:
 *                    type: string
 *                    example: jhondoe@email.com
 *                  password:
 *                    type: sring
 *                    example: pass123
 *       400:
 *         description: Failed User creation
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *                properties:
 *                  error:
 *                    type: string
 *                    example: firstName is a wrong string
 */
router.post('/', createUser)

/**
 * @openapi
 * /api/user/{userId}:
 *   get:
 *     summary: Get User by id
 *     tags:
 *      - Users
 *     produces:
 *      - application/json
 *     parameters:
 *       - name: userId
 *         in: json
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successful delete User
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *                properties:
 *                  _id:
 *                    type: string
 *                    example: 651256e19c46e35b73b61588
 *                  firstName:
 *                    type: string
 *                    example: Jhon
 *                  lastName:
 *                    type: string
 *                    example: Doe
 *                  email:
 *                    type: string
 *                    example: jhondoe@email.com
 *                  password:
 *                    type: sring
 *                    example: pass123
 *       400:
 *         description: Failed delete User
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *                properties:
 *                  error:
 *                    type: string
 *                    example: Entered id not exists
 */
router.get('/:userId', getUser)

/**
 * @openapi
 * /api/user:
 *   put:
 *     summary: Update User
 *     tags:
 *      - Users
 *     requestBody:
 *      content:
 *        application/json:
 *          schema:
 *             type: object
 *             properties:
 *               _id:
 *                 type: string
 *                 example: 651256e19c46e35b73b61588
 *               firstName:
 *                 type: string
 *                 example: Jhon
 *               lastName:
 *                 type: string
 *                 example: Doe
 *               email:
 *                 type: string
 *                 example: jhondoe@email.com
 *               password:
 *                 type: sring
 *                 example: pass123
 *      required: true
 *     responses:
 *       200:
 *         description: Successful User update
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *                properties:
 *                  _id:
 *                    type: string
 *                    example: 651256e19c46e35b73b61588
 *                  firstName:
 *                    type: string
 *                    example: Jhon
 *                  lastName:
 *                    type: string
 *                    example: Doe
 *                  email:
 *                    type: string
 *                    example: jhondoe@email.com
 *                  password:
 *                    type: sring
 *                    example: pass123
 *       400:
 *         description: Failed User update
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *                properties:
 *                  error:
 *                    type: string
 *                    example: firstName is a wrong string
 */
router.put('/', updateUser)

/**
 * @openapi
 * /api/user/{userId}:
 *   delete:
 *     summary: Delete User
 *     tags:
 *      - Users
 *     produces:
 *      - application/json
 *     parameters:
 *       - name: userId
 *         in: json
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successful delete User
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *                properties:
 *                  _id:
 *                    type: string
 *                    example: 651256e19c46e35b73b61588
 *                  firstName:
 *                    type: string
 *                    example: Jhon
 *                  lastName:
 *                    type: string
 *                    example: Doe
 *                  email:
 *                    type: string
 *                    example: jhondoe@email.com
 *                  password:
 *                    type: sring
 *                    example: pass123
 *       400:
 *         description: Failed delete User
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *                properties:
 *                  error:
 *                    type: string
 *                    example: Entered id not exists
 */
router.delete('/:userId', deleteUser)

/**
 * @openapi
 * /api/user/auth:
 *   post:
 *     summary: Authenticate User
 *     tags:
 *      - Users
 *     requestBody:
 *      content:
 *        application/json:
 *          schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: jhondoe@email.com
 *               password:
 *                 type: sring
 *                 example: pass123
 *      required: true
 *     responses:
 *       200:
 *         description: Successful User authentication
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *                properties:
 *                  _id:
 *                    type: string
 *                    example: 651256e19c46e35b73b61588
 *                  firstName:
 *                    type: string
 *                    example: Jhon
 *                  lastName:
 *                    type: string
 *                    example: Doe
 *                  email:
 *                    type: string
 *                    example: jhondoe@email.com
 *                  password:
 *                    type: sring
 *                    example: pass123
 *       400:
 *         description: Failed User authentication
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *                properties:
 *                  error:
 *                    type: string
 *                    example: Credentials are incorrect
 */
router.post('/auth', authUser)

export default router
