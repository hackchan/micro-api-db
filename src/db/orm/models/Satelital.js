import { Model, DataTypes } from 'sequelize'
import { tableName as tableNameUser } from './User'
export const tableName = 'satelitales'

export const SatelitalSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING
  },
  active: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },

  userId: {
    field: 'user_id',
    allowNull: false,
    unique: true,
    type: DataTypes.INTEGER,
    references: {
      model: tableNameUser,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
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
    this.hasMany(models.Department, { foreignKey: 'satelitalId', as: 'departmets' })
    this.belongsTo(models.User, { as: 'user' })
  }
                        
  static config(sequelize) {
    return {
      sequelize,
      modelName: 'Satelital',
      tableName,
      timestamps: false
    }
  }
}
