import { TodoModel } from '../models/todo.model.js'
import { validateString } from '../validations/string.validations.js'

// Create todo
export const createTodo = async (request, response, next) => {
  try {
    const todo = request.body
    for (const key in todo) {
      if (typeof todo[key] === 'string') {
        const validation = {
          text: todo[key],
          length: 4
        }

        if (!validateString(validation)) {
          return response.status(400).send({ error: `${key} is a wrong string` })
        }
      }
    }

    const createdTodo = await TodoModel.create({ ...todo, name: todo.name.toLowerCase() })
    return response.status(200).send({ todo: createdTodo })
  } catch (error) {
    response.status(400).send({ error })
    next()
  }
}

// Get todos by user
export const getTodos = async (request, response, next) => {
  try {
    const { userId, searhTerm, startDate, endDate } = request.query
    const searchTermIsValid = validateString({ text: searhTerm, length: 3 })
    const datesIsValid = isDateValid(startDate) && isDateValid(endDate)

    if (!searchTermIsValid && !datesIsValid) {
      const todos = await TodoModel.find({ userId })
      return response.status(200).send({ todos })
    }

    if (searchTermIsValid && !datesIsValid) {
      const todos = await TodoModel.find({ userId, name: new RegExp(searhTerm.toLowerCase()) })
      return response.status(200).send({ todos })
    }

    if (!searchTermIsValid && datesIsValid) {
      const todos = await TodoModel.find({ userId })

      const filteredTodos = todos.filter((todo) => {
        const startDateTime = new Date(startDate).getTime()
        const endDateTime = new Date(endDate).getTime()
        const dateTime = new Date(todo.finishDate).getTime()

        return dateTime <= endDateTime && dateTime >= startDateTime
      })

      return response.status(200).send({ todos: filteredTodos })
    }

    const todos = await TodoModel.find({ userId, name: new RegExp(searhTerm.toLowerCase()) })
    const filteredTodos = todos.filter((todo) => {
      const startDateTime = new Date(startDate).getTime()
      const endDateTime = new Date(endDate).getTime()
      const dateTime = new Date(todo.finishDate).getTime()

      return dateTime <= endDateTime && dateTime >= startDateTime
    })

    return response.status(200).send({ todos: filteredTodos })
  } catch (error) {
    console.log(error)
    response.status(400).send({ error })
    next()
  }
}

// Update todo
export const updateTodo = async (request, response, next) => {
  try {
    const todo = request.body

    for (const key in todo) {
      if (typeof todo[key] === 'string') {
        const validation = {
          text: todo[key],
          length: 4
        }

        if (!validateString(validation)) {
          return response.status(400).send({ error: `${key} is a wrong string` })
        }
      }
    }

    const updatedTodo = await TodoModel.findByIdAndUpdate(todo._id, todo, { new: true })
    return response.status(200).send({ todo: updatedTodo })
  } catch (error) {
    response.status(400).send({ error })
    next()
  }
}

// Delete todo
export const deleteTodo = async (request, response, next) => {
  try {
    const { todoId } = request.params
    const todo = await TodoModel.findOneAndDelete(todoId)

    if (!todo) {
      return response.status(400).send({ error: 'Entered id not exists' })
    }

    return response.status(200).send({ todo })
  } catch (error) {
    response.status(400).send({ error })
    next()
  }
}

function isDateValid (dateStr) {
  return !isNaN(new Date(dateStr))
}
