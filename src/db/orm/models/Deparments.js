import { DataTypes, Model } from 'sequelize'
export const tableName = 'department'

export const DepartmentSchema = {
  id: {
    type: DataTypes.INTEGER,
    field: 'depart_id',
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
  activo: {
    allowNull: true,
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  satelitalId: {
    field: 'satelital_id',
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: 'satelital',
      key: 'satelital_id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

export class Department extends Model {
  static associate(models) {
    this.belongsTo(models.satelital, { foreignKey: 'satelital_id' })
    this.hasMany(models.entidad, { foreignKey: 'depart_id' })
  }
  static config(sequelize) {
    return {
      sequelize,
      modelName: 'department',
      tableName,
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
