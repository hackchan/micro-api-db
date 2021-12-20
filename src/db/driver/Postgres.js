import { Pool } from 'pg'
import config from '../../config'
export default class Postgres {
  async connect() {
    try {
      if (!Postgres.connection) {
        const USER = encodeURIComponent(config.db.user)
        const PASSWORD = encodeURIComponent(config.db.password)
        const URI = `${config.db.dialect}://${USER}:${PASSWORD}@${config.db.server}:${config.db.port}/${config.db.dbName}`

        Postgres.connection = new Pool({ connectionString: URI })
        console.log('Connected succesfully')
      }
      return Postgres.connection
    } catch (error) {
      throw error
    }
  }

  async query(request) {
    try {
      const db = await this.connect()
      return await db.query(request)
    } catch (error) {
      throw error
    }
  }
}
