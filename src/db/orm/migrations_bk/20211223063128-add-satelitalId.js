'use strict'
const { DepartmentSchema, tableName } = require('../models/Deparments')
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.addColumn(
      tableName,
      'satelital_id',
      DepartmentSchema.satelital_id
    )
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn(
      tableName,
      'satelital_id',
      DepartmentSchema.satelital_id
    )
  }
}
