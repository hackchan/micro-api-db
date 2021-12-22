//const conf = require('../../config')
//const config = conf.default

NODE_ENV = 'development'
NODE_PORT = 3000

const USER = encodeURIComponent('nico')
const PASSWORD = encodeURIComponent('admin123')
const URI = `postgres://${USER}:${PASSWORD}@localhost:5432/my_store`

module.exports = {
  development: {
    url: URI,
    dialect: 'postgres'
  },
  production: {
    url: URI,
    dialect: 'postgres'
  }
}
