import { success } from '../../../utils/response'
import Department from '../../../db/orm/models/Departamento'

export const createDepartment = async (req, res, next) => {
  try {
    const deparment = req.body
    await Department.create(deparment, {
      field: ['nombre', 'id_sate', 'longitud', 'latitud']
    })
    success(req, res, { message: 'departamento creado' }, 201)
  } catch (error) {
    next(error)
  }
}
