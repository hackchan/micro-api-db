import { DataTypes, Model } from 'sequelize'
import { tableName as tableNameAuth } from './Auth'
export const tableName = 'users'

export const userSchema = {
  id: {
    type: DataTypes.INTEGER,
    field: 'user_id',
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },

  name: {
    allowNull: false,
    type: DataTypes.STRING
  },

  lastName: {
    allowNull: false,
    type: DataTypes.STRING
  },

  phone: {
    allowNull: false,
    type: DataTypes.STRING
  },

  email: {
    allowNull: true,
    unique: true,
    type: DataTypes.STRING
  },

  created_at: {
    allowNull: false,
    type: DataTypes.DATE
  },

  authId: {
    field: 'auth_id',
    allowNull: true,
    unique: true,
    type: DataTypes.INTEGER,
    references: {
      model: tableNameAuth,
      key: 'auth_id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

export class User extends Model {
  static associate(models) {
    this.belongsTo(models.Auth, { foreignKey: 'auth_id', as: 'auth' })
  }

  static config(sequelize) {
    return {
      freezeTableName: true,
      sequelize,
      modelName: 'User',
      tableName,
      timestamps: false
    }
  }
}
