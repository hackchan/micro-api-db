const Joi = require('joi')

const id = Joi.number().integer()
const user = Joi.string().min(3).max(25)
//const avatar = Joi.string().uri()
//const image = Joi.string().uri()
//const email = Joi.string().email()
const password = Joi.string()
const role = Joi.string()
const created_at = Joi.date()

export const createUserSchema = Joi.object({
  user: user.required(),
  password: password.required(),
  role: role.required(),
  created_at: created_at.required()
})

export const updateUserSchema = Joi.object({
  user,
  password,
  role,
  created_at
})

export const getUserSchema = Joi.object({
  id: id.required()
})
