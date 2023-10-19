import { Router } from 'express'
import { createTodo, deleteTodo, updateTodo, getTodos } from '../controllers/todo.controller.js'

const router = Router()

/**
 * @openapi
 * /api/todo:
 *   post:
 *     summary: Create a Todo
 *     tags:
 *      - Todos
 *     requestBody:
 *      content:
 *        application/json:
 *          schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Ver tutorial de react
 *               description:
 *                 type: string
 *                 example: Ver tutorial de react
 *               finishDate:
 *                 type: string
 *                 format: date
 *               isCompleted:
 *                 type: boolean
 *               userId:
 *                 type: string
 *                 example: 651256e19c46e35b73b61588
 *      required: true
 *     responses:
 *       200:
 *         description: Successful Todo creation
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *                properties:
 *                  _id:
 *                    type: string
 *                    example: 651256e19c46e35b73b61588
 *                  name:
 *                    type: string
 *                    example: Ver tutorial de react
 *                  description:
 *                    type: string
 *                    example: Ver tutorial de react
 *                  finishDate:
 *                    type: string
 *                    format: date
 *                  isCompleted:
 *                    type: boolean
 *                  userId:
 *                    type: string
 *                    example: 651256e19c46e35b73b61588
 *       400:
 *         description: Failed Todo creation
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *                properties:
 *                  error:
 *                    type: string
 *                    example: Name is a wrong string
 */
router.post('/', createTodo)

/**
 * @openapi
 * /api/todo:
 *   get:
 *     summary: Get all Todos
 *     tags:
 *      - Todos
 *     produces:
 *      - application/json
 *     parameters:
 *       - name: userId
 *         in: json
 *         required: true
 *         type: string
 *       - name: searhTerm
 *         in: json
 *         type: string
 *       - name: startDate
 *         in: json
 *         type: string
 *         format: date
 *       - name: endDate
 *         in: json
 *         type: string
 *         format: date
 *     responses:
 *       200:
 *         description: Successful gotten Todos
 *         content:
 *           application/json:
 *             schema:
 *                type: array
 *                items:
 *                  properties:
 *                    _id:
 *                      type: string
 *                      example: 651256e19c46e35b73b61588
 *                    name:
 *                      type: string
 *                      example: Ver tutorial de react
 *                    description:
 *                      type: string
 *                      example: Ver tutorial de react
 *                    finishDate:
 *                      type: string
 *                      format: date
 *                    isCompleted:
 *                      type: boolean
 *                    userId:
 *                      type: string
 *                      example: 651256e19c46e35b73b61588
 *       400:
 *         description: Failed gotten Todo
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *                properties:
 *                  error:
 *                    type: string
 *                    example: Internal server error
 */
router.get('/', getTodos)

/**
 * @openapi
 * /api/todo:
 *   put:
 *     summary: Update a Todo
 *     tags:
 *      - Todos
 *     requestBody:
 *      content:
 *        application/json:
 *          schema:
 *             type: object
 *             properties:
 *               _id:
 *                 type: string
 *                 example: 651256e19c46e35b73b61588
 *               name:
 *                 type: string
 *                 example: Ver tutorial de react
 *               description:
 *                 type: string
 *                 example: Ver tutorial de react
 *               finishDate:
 *                 type: string
 *                 format: date
 *               isCompleted:
 *                 type: boolean
 *               userId:
 *                 type: string
 *                 example: 651256e19c46e35b73b61588
 *      required: true
 *     responses:
 *       200:
 *         description: Successful update Todo
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *                properties:
 *                  _id:
 *                    type: string
 *                    example: 651256e19c46e35b73b61588
 *                  name:
 *                    type: string
 *                    example: Ver tutorial de react
 *                  description:
 *                    type: string
 *                    example: Ver tutorial de react
 *                  finishDate:
 *                    type: string
 *                    format: date
 *                  isCompleted:
 *                    type: boolean
 *                  userId:
 *                    type: string
 *                    example: 651256e19c46e35b73b61588
 *       400:
 *         description: Failed update Todo
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *                properties:
 *                  error:
 *                    type: string
 *                    example: Name is a wrong string
 */
router.put('/', updateTodo)

/**
 * @openapi
 * /api/todo/{todoId}:
 *   delete:
 *     summary: Delete a Todo
 *     tags:
 *      - Todos
 *     produces:
 *      - application/json
 *     parameters:
 *       - name: todoId
 *         in: json
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successful delete Todo
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *                properties:
 *                  _id:
 *                    type: string
 *                    example: 651256e19c46e35b73b61588
 *                  name:
 *                    type: string
 *                    example: Ver tutorial de react
 *                  description:
 *                    type: string
 *                    example: Ver tutorial de react
 *                  finishDate:
 *                    type: string
 *                    format: date
 *                  isCompleted:
 *                    type: boolean
 *                  userId:
 *                    type: string
 *                    example: 651256e19c46e35b73b61588
 *       400:
 *         description: Failed delete Todo
 *         content:
 *           application/json:
 *             schema:
 *                type: object
 *                properties:
 *                  error:
 *                    type: string
 *                    example: Entered id not exists
 */
router.delete('/:todoId', deleteTodo)

export default router
