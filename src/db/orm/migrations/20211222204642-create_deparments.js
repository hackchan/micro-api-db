'use strict'
const { userSchema, tableName: tableNameUser } = require('../models/User')
const { authSchema, tableName: tableNameAuth } = require('../models/Auth')
const { SatelitalSchema, tableName: tableNameSatelital } = require('../models/Satelital')
const {
  DepartmentSchema,
  tableName: tableNameDepartment
} = require('../models/Deparments')
const { tipoEntidadSchema, tableName: tentidad } = require('../models/TipoEntidad')
const { entidadSchema, tableName: tableNameEntidad } = require('../models/Entidad')

// const { reporteSchema, tableName: tableNameReporte } = require('../models/Reporte')
// const { diccionarioSchema, tableName: tableNameDicci } = require('../models/Diccionario')
// const { vigenciaSchema, tableName: tableNameVigencia } = require('../models/Vigencia')
// const { informadoSchema, tableName: tableNameInformado } = require('../models/Informado')
// const { circularSchema, tableName: tableNameCircular } = require('../models/Circular')
// const {
//   ejecucionPresupuestalIngresoSchema,
//   tableName: tableNameEPI
// } = require('../models/EjecucionPresupuestalIngresos')
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(tableNameAuth, authSchema)
    await queryInterface.createTable(tableNameUser, userSchema)
    await queryInterface.createTable(tableNameSatelital, SatelitalSchema)
    await queryInterface.createTable(tableNameDepartment, DepartmentSchema)
    await queryInterface.createTable(tentidad, tipoEntidadSchema)
    await queryInterface.createTable(tableNameEntidad, entidadSchema)
    //  await queryInterface.createTable(tableNameCircular, circularSchema)
    // await queryInterface.createTable(tableNameReporte, reporteSchema)
    //await queryInterface.createTable(tableNameDicci, diccionarioSchema)
    //await queryInterface.createTable(tableNameVigencia, vigenciaSchema)
    // await queryInterface.createTable(tableNameInformado, informadoSchema)
    //await queryInterface.createTable(tableNameEPI, ejecucionPresupuestalIngresoSchema)
  },

  down: async (queryInterface) => {
    await queryInterface.droptable(tableNameAuth, authSchema)
    await queryInterface.dropTable(tableNameUser, userSchema)
    await queryInterface.dropTable(tableNameSatelital)
    await queryInterface.dropTable(tableNameDepartment)
    await queryInterface.dropTable(tentidad, tipoEntidadSchema)
    await queryInterface.dropTable(tableNameEntidad, entidadSchema)
    // await queryInterface.dropTable(tableNameCircular, circularSchema)
    // await queryInterface.dropTable(tableNameReporte, reporteSchema)
    // await queryInterface.dropTable(tableNameDicci, diccionarioSchema)
    // await queryInterface.dropTable(tableNameVigencia, vigenciaSchema)
    // await queryInterface.dropTable(tableNameInformado, informadoSchema)
    // await queryInterface.dropTable(tableNameEPI, ejecucionPresupuestalIngresoSchema)
  }
}
