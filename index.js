import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { connect } from 'mongoose'
import { serve, setup } from 'swagger-ui-express'
import userRouter from './src/routes/user.routes.js'
import todoRouter from './src/routes/todo.routes.js'
import swaggerJSDoc from 'swagger-jsdoc'
import 'dotenv/config'

const app = express()

// Config server
app.use(
  express.json(),
  morgan('dev'),
  cors()
)

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Todo API JC',
      version: '1.0.0',
      description: 'Todo API for final project of Jóvenes creaTIvos 2023'
    }
  },
  apis: ['./src/routes/*.js']
}

const swaggerDocs = swaggerJSDoc(swaggerOptions)

// Ading routes
app.use('/api/user', userRouter)
app.use('/api/todo', todoRouter)
app.use('/api/docs', serve, setup(swaggerDocs))

const PORT = process.env.PORT || 3000
const ENV = process.env.NODE_ENV || 'development'
const DATABASE_URI = ENV === 'development' ? process.env.DATABASE_URI_DEV : process.env.DATABASE_URI_PROD

// Starting server running
if (DATABASE_URI) {
  connect(DATABASE_URI)
    .then(() => app.listen(PORT, () => {
      console.log(`Server running for ${ENV} in port ${PORT}...`)
    }))
    .catch((e) => console.log(e))
} else {
  console.log('Database URI not provided...')
}
