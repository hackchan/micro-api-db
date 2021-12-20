import faker from 'faker'
import boom from '@hapi/boom'
class UserService {
  constructor() {
    this.usuarios = []
    this.init()
  }
  init() {
    for (let index = 0; index < 50; index++) {
      this.usuarios.push({
        id: faker.datatype.uuid(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        avatar: faker.image.imageUrl(),
        email: faker.internet.email()
      })
    }
  }
  async findAll() {
    try {
      return this.usuarios
    } catch (error) {
      throw error
    }
  }
  async findOne(id) {
    try {
      const index = this.usuarios.findIndex((user) => user.id === id)
      if (index === -1) {
        throw boom.notFound('Usuario no encontrado')
      }
      return this.usuarios[index]
    } catch (error) {
      throw error
    }
  }

  async create() {}

  async update() {}

  async delete() {}
}

export default UserService
