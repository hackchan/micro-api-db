import DataBase from '../../../db/orm/DataBase'
class DeparmentService {
  constructor() {}

  async getModel() {
    const { DepartmentsModel } = await DataBase.getModels()
    this.departmentModel = DepartmentsModel
  }

  static async getInstance() {
    if (!DeparmentService._departmentsServiceInstance) {
      DeparmentService._departmentsServiceInstance = new DeparmentService()
      await DeparmentService._departmentsServiceInstance.getModel()
    }
    return DeparmentService._departmentsServiceInstance
  }

  async findAll() {
    try {
      return this.departmentModel.findAll()
    } catch (error) {
      throw error
    }
  }
}

export default DeparmentService
