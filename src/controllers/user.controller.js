import { UserModel } from '../models/user.model.js'
import { validateString } from '../validations/string.validations.js'

// Create user
export const createUser = async (request, response, next) => {
  try {
    const user = request.body
    for (const key in user) {
      const validation = {
        text: user[key],
        length: key === 'password' ? 8 : 3
      }

      if (!validateString(validation)) {
        return response.status(400).send({ error: `${key} is a wrong string` })
      }
    }

    const userDuplicated = await UserModel.findOne({ email: user.email })

    if (userDuplicated) {
      return response.status(400).send({ error: 'Entered email already exists' })
    }

    const createdUser = await UserModel.create(UserModel.toLowerCase(user))
    return response.status(200).send({ user: createdUser })
  } catch (error) {
    response.status(400).send({ error })
    next()
  }
}

// Get user by id
export const getUser = async (request, response, next) => {
  try {
    const { userId } = request.params
    const user = await UserModel.findById(userId)

    if (!user) {
      return response.status(400).send({ error: 'Entered id not exists' })
    }

    return response.status(200).send({ user })
  } catch (error) {
    response.status(400).send({ error })
    next()
  }
}

// Login user
export const authUser = async (request, response, next) => {
  try {
    const user = request.body

    for (const key in user) {
      const validation = {
        text: user[key],
        length: key === 'password' ? 8 : 3
      }

      if (!validateString(validation)) {
        return response.status(400).send({ error: `${key} is a wrong string` })
      }
    }

    const databaseUser = await UserModel.findOne({ email: user.email, password: user.password })

    if (!databaseUser) {
      return response.status(400).send({ error: 'Credentials are incorrect' })
    }

    return response.status(200).send({ user: databaseUser })
  } catch (error) {
    response.status(400).send({ error })
    next()
  }
}

// Update user
export const updateUser = async (request, response, next) => {
  try {
    const user = request.body

    for (const key in user) {
      const validation = {
        text: user[key],
        length: key === 'password' ? 8 : 3
      }

      if (!validateString(validation)) {
        return response.status(400).send({ error: `${key} is a wrong string` })
      }
    }

    const updatedUser = await UserModel.findByIdAndUpdate(user._id, user, { new: true })
    return response.status(200).send({ user: updatedUser })
  } catch (error) {
    response.status(400).send({ error })
    next()
  }
}

// Delete user
export const deleteUser = async (request, response, next) => {
  try {
    const { userId } = request.params
    const user = await UserModel.findOneAndDelete(userId)

    if (!user) {
      return response.status(400).send({ error: 'Entered id not exists' })
    }

    return response.status(200).send({ user })
  } catch (error) {
    response.status(400).send({ error })
    next()
  }
}
