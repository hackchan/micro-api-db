import { Sequelize } from 'sequelize'
import config from '../../config'
import setupModel from './models'

const USER = encodeURIComponent(config.db.user)
const PASSWORD = encodeURIComponent(config.db.password)
const URI = `${config.db.dialect}://${USER}:${PASSWORD}@${config.db.server}:${config.db.port}/${config.db.dbName}`

const sequelize = new Sequelize(URI, {
  dialect: config.db.dialect,
  loggin: config.db.env,
  pool: {
    max: 20,
    min: 20,
    require: 30000,
    idle: 10000
  }
})

setupModel(sequelize)
sequelize.sync()
export default sequelize
