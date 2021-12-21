import { success } from '../../../utils/response'
import dataBase from '../../../db/orm/DataBase'
import { database } from 'faker'

export const createDepartment = async (req, res, next) => {
  try {
    const {DepartmentsModel} = await dataBase.getModels()
    const listaDepartamentos = await DepartmentsModel.findAll()
    //const departs = await Department.findAll()
    // const department = req.body
    // await Department.create(department, {
    //    field: ['nombre', 'idSatelital', 'longitud', 'latitud']
    //  })
    success(req, res, listaDepartamentos, 201)
  } catch (error) {
    next(error)
  }
}
