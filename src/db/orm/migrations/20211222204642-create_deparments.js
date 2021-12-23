'use strict'
const { DepartmentSchema, tableName } = require('../models/Deparments')
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(tableName, DepartmentSchema)
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(tableName)
  }
}
