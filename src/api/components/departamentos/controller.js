import { success } from '../../../utils/response'
//import dataBase from '../../../db/orm/DataBase'
import DepartmentService from './department.service'

export const createDepartment = async (req, res, next) => {
  try {
    //const { DepartmentsModel } = await dataBase.getModels()
    const services = await DepartmentService.getInstance()
    const lista = await services.findAll()
    //const listaDepartamentos = await DepartmentsModel.findAll()
    //const departs = await Department.findAll()
    // const department = req.body
    // await Department.create(department, {
    //    field: ['nombre', 'idSatelital', 'longitud', 'latitud']
    //  })
    success(req, res, lista, 201)
  } catch (error) {
    next(error)
  }
}
