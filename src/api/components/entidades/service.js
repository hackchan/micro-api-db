import db from '../../../db/orm/sequelize'

class EntidadService {
  constructor() {}

  async find() {
    try {
      //const model = db.models.entidad
      // return await model.findAll({ order: [['id', 'ASC']] })
      const list = await db.models.entidad.findAll({
        include: ['tipo', 'user', 'depart']
      })
      return list
    } catch (error) {
      throw error
    }
  }
}

export default EntidadService
