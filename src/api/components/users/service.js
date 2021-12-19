import faker from 'faker'
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
  async findOne() {}

  async create() {}

  async update() {}

  async delete() {}
}

export default UserService
