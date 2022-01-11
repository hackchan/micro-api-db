import { DataTypes, Model } from 'sequelize'

export const tableName = 'diccionario'

export const diccionarioSchema = {
  id: {
    type: DataTypes.INTEGER,
    field: 'dicci_id',
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },

  nombre: {
    allowNull: false,
    type: DataTypes.STRING
  },

  descripccion: {
    allowNull: false,
    type: DataTypes.TEXT
  },
  tipo: {
    allowNull: false,
    type: DataTypes.STRING
  },
  ejemplo: {
    allowNull: false,
    type: DataTypes.STRING
  },
  reportId: {
    field: 'reporte_id',
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: 'reportes',
      key: 'reporte_id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

export class Diccionario extends Model {
  static associate(models) {
    this.belongsTo(models.reportes, { foreignKey: 'reporte_id' })
  }

  static config(sequelize) {
    return {
      sequelize,
      modelName: 'diccionario',
      tableName,
      timestamps: false
    }
  }
}
