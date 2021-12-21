import { database } from 'faker'
import { Sequelize } from 'sequelize'
import config from '../../config'
import DepartmentsModel from './models/Deparments'
class DataBase {
    static _instance = null
    
    static async getModels(){
        if(!DataBase._instance){
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
        DepartmentsModel.setup(DataBase._instance)

        //define Relaciones
        
        //
        await DataBase._instance.sync()
    }

    return{
        DepartmentsModel
    }

}
}
export default DataBase