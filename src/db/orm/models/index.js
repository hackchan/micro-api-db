import { Department, DepartmentSchema } from './Deparments'
/**Aqui vamos a inicializar todos los modelos */

function setupModel(sequelize) {
  Department.init(DepartmentSchema, Department.config(sequelize))
}

export default setupModel
