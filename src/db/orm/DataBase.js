import { Sequelize } from 'sequelize'
const config = require('../../config')
//import DepartmentsModel from './models/Deparments'
import setupModel from './models'
class DataBase {
  static async getDB() {
    if (!DataBase._instance) {
      const USER = encodeURIComponent(config.db.user)
      const PASSWORD = encodeURIComponent(config.db.password)
      const URI = `${config.db.dialect}://${USER}:${PASSWORD}@${config.db.server}:${config.db.port}/${config.db.dbName}`
      DataBase._instance = new Sequelize(URI, {
        dialect: config.db.dialect,
        loggin: config.db.env,
        pool: {
          max: 20,
          min: 20,
          require: 30000,
          idle: 10000
        }
      })

      //define modelos
      //DepartmentsModel.setup(DataBase._instance)

      //define Relaciones

      //
      setupModel(DataBase._instance)
      await DataBase._instance.sync()
    }
    return DataBase._instance
    // return {
    //   DepartmentsModel
    // }
  }
}
export default DataBase
