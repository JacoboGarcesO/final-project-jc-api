import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import userRouter from './src/routes/user.routes.js';
import todoRouter from './src/routes/todo.routes.js';
import { connect } from 'mongoose';
import 'dotenv/config'

const app = express();

// Config server
app.use(
  express.json(),
  morgan('dev'),
  cors(),
);

// Ading routes
app.use('/api/user', userRouter);
app.use('/api/todo', todoRouter);

const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || 'development';
const DATABASE_URI = ENV === 'development' ? process.env.DATABASE_URI_DEV : process.env.DATABASE_URI_PROD;

// Starting server running
if (DATABASE_URI) {
  connect(DATABASE_URI)
    .then(() => app.listen(PORT, () => {
      console.log(`Server running for ${ENV} in port ${PORT}...`);
    }))
    .catch((e) => console.log(e));
} else {
  console.log('Database URI not provided...');
}
