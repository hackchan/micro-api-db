const { DataTypes, Model } = require('sequelize')

const tableName = 'departamentos'

const DepartmentSchema = {
  id: {
    type: DataTypes.INTEGER,
    field: 'id_depart',
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING
  },
  longitud: {
    allowNull: true,
    type: DataTypes.REAL
  },
  latitud: {
    allowNull: true,
    type: DataTypes.REAL
  },

  satelital_id: {
    allowNull: true,
    type: DataTypes.INTEGER
  }
}

class Department extends Model {
  static associate() {}
  static config(sequelize) {
    return {
      sequelize,
      modelName: 'department',
      tableName: 'departamentos',
      timestamps: false
    }
  }
  //   static setup(sequelize) {
  //     Department.init(DepartmentSchema, {
  //       sequelize,
  //       modelName: 'departamentos',
  //       tableName,
  //       timestamps: false
  //     })
  //   }
}

module.exports = { tableName, DepartmentSchema, Department }
