'use strict'
const { DataTypes } = require('sequelize')
const { tableName } = require('../models/Entidad')
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.changeColumn(tableName, 'users_id', {
      field: 'users_id',
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: true
    })
  },

  down: async (queryInterface) => {
    // await queryInterface.removeColumn(
    //   tableName,
    //   entidadSchema
    //)
  }
}
