import db from '../../../db/orm/sequelize'
import boom from '@hapi/boom'
class Satelital {
  constructor() {}

  async findall() {
    try {
      const lista = await db.models.satelital.findAll()
      return lista
    } catch (error) {
      throw error
    }
  }

  async findOne(id) {
    try {
      const satelital = await db.models.satelital.findByPk(id)
      if (!satelital) {
        throw boom.notFound('satelital not found!!')
      }
    } catch (error) {
      throw error
    }
  }
}

export default Satelital
