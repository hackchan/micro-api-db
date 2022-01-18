import db from '../../../db/orm/sequelize'
import boom from '@hapi/boom'
class UserService {
  constructor() {}

  async create(data) {
    const newUser = await db.models.users.create(data)
    return newUser
  }

  async findAll() {
    try {
      const list = await db.models.users.findAll({
        include: ['entidad']
      })
      return list
    } catch (error) {
      throw error
    }
  }

  async findOne(id) {
    try {
      const user = await db.models.users.findByPk(id)
      if (!user) {
        throw boom.notFound('user not found')
      }
      return user
    } catch (error) {
      throw error
    }
  }

  async update(id, changes) {
    const user = await this.findOne(id)
    const rta = await user.update(changes)
    return rta
  }

  async delete(id) {
    const user = await this.findOne(id)
    await user.destroy()
    return { id }
  }
}

export default UserService
