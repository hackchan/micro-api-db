import { Model, DataTypes } from 'sequelize'

export const tableName = 'satelital'

export const SatelitalSchema = {
  id: {
    type: DataTypes.INTEGER,
    field: 'satelital_id',
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING
  },
  activo: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },

  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: DataTypes.NOW
  }
}

export class Satelital extends Model {
  static associate(models) {
    this.hasMany(models.department, { foreignKey: 'satelital_id' })
  }

  static config(sequelize) {
    return {
      sequelize,
      modelName: 'satelital',
      tableName,
      timestamps: false
    }
  }
}
