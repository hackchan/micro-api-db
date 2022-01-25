import { DataTypes, Model } from 'sequelize'

export const tableName = 'auths'

export const authSchema = {
  id: {
    type: DataTypes.INTEGER,
    field: 'auth_id',
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },

  username: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING
  },

  password: {
    allowNull: false,
    type: DataTypes.STRING
  },

  role: {
    allowNull: false,
    type: DataTypes.STRING
  },

  created_at: {
    allowNull: false,
    type: DataTypes.DATE
  }
}

export class Auth extends Model {
  static associate(models) {
    this.hasOne(models.User, { foreignKey: 'auth_id', as: 'user' })
  }

  static config(sequelize) {
    return {
      freezeTableName: true,
      sequelize,
      modelName: 'Auth',
      tableName,
      timestamps: false
    }
  }
}
