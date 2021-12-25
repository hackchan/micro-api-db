const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  dev: process.env.NODE_ENV === 'developmnet' ? true : false,
  port: process.env.NODE_PORT || 3000,
  db: {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    server: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT
  }
}
