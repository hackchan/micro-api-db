import Postgres from './Postgres'

export default class ResourcesService {
  constructor(table) {
    this.table = table
    this.client = new Postgres()
  }

  async findAll() {
    const { rows } = await this.client.query(`SELECT * FROM ${this.table}`)
    return rows
  }
}
