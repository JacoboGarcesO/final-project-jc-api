import { model, Schema } from 'mongoose'

const todoSchema = new Schema({
  name: { type: String, required: [true, 'Todo name is required'] },
  description: { type: String, required: [true, 'Todo description is required'] },
  finishDate: { type: Date, required: [true, 'Todo finishDate is required'] },
  isCompleted: { type: Boolean, required: [true, 'Todo isCompleted is required'] },
  userId: { type: Schema.ObjectId, ref: 'User', required: [true, 'Todo userId is required'] }
}, { collection: 'Todo' })

export const TodoModel = model('Todo', todoSchema)
