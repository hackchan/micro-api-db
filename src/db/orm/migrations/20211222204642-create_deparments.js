'use strict'
const { SatelitalSchema, tableName: tableNameSatelital } = require('../models/Satelital')
const { DepartmentSchema, tableName } = require('../models/Deparments')
const { tipoEntidadSchema, tableName: tentidad } = require('../models/TipoEntidad')
const { userSchema, tableName: tableNameUsers } = require('../models/Users')
const { entidadSchema, tableName: tableNameEntidad } = require('../models/Entidad')
const { reporteSchema, tableName: tableNameReporte } = require('../models/Reporte')
const { circularSchema, tableName: tableNameCircular } = require('../models/Circular')
const { diccionarioSchema, tableName: tableNameDicci } = require('../models/Diccionario')
const { vigenciaSchema, tableName: tableNameVigencia } = require('../models/Vigencia')
const { informadoSchema, tableName: tableNameInformado } = require('../models/Informado')
const {
  ejecucionPresupuestalIngresoSchema,
  tableName: tableNameEPI
} = require('../models/EjecucionPresupuestalIngresos')
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(tableNameSatelital, SatelitalSchema)
    await queryInterface.createTable(tableName, DepartmentSchema)
    await queryInterface.createTable(tentidad, tipoEntidadSchema)
    await queryInterface.createTable(tableNameUsers, userSchema)
    await queryInterface.createTable(tableNameEntidad, entidadSchema)
    await queryInterface.createTable(tableNameCircular, circularSchema)
    await queryInterface.createTable(tableNameReporte, reporteSchema)
    await queryInterface.createTable(tableNameDicci, diccionarioSchema)
    await queryInterface.createTable(tableNameVigencia, vigenciaSchema)
    await queryInterface.createTable(tableNameInformado, informadoSchema)
    await queryInterface.createTable(tableNameEPI, ejecucionPresupuestalIngresoSchema)
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(tableName)
    await queryInterface.dropTable(tableNameSatelital)
    await queryInterface.dropTable(tableNameUsers, userSchema)
    await queryInterface.dropTable(tentidad, tipoEntidadSchema)
    await queryInterface.dropTable(tableNameEntidad, entidadSchema)
    await queryInterface.dropTable(tableNameCircular, circularSchema)
    await queryInterface.dropTable(tableNameReporte, reporteSchema)
    await queryInterface.dropTable(tableNameDicci, diccionarioSchema)
    await queryInterface.dropTable(tableNameVigencia, vigenciaSchema)
    await queryInterface.dropTable(tableNameInformado, informadoSchema)
    await queryInterface.dropTable(tableNameEPI, ejecucionPresupuestalIngresoSchema)
  }
}
