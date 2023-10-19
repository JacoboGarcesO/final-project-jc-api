import { model, Schema } from 'mongoose'

const userSchema = new Schema({
  firstName: { type: String, required: [true, 'User first name is required'] },
  lastName: { type: String, required: [true, 'User last name is required'] },
  email: { type: String, required: [true, 'User email is required'] },
  password: { type: String, required: [true, 'User password is required'] }
}, {
  collection: 'User',
  statics: {
    toLowerCase (user) {
      return {
        ...user,
        firstName: user.firstName.toLowerCase(),
        lastName: user.lastName.toLowerCase()
      }
    }
  }
})

export const UserModel = model('User', userSchema)
