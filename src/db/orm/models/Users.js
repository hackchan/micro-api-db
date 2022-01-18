import { DataTypes, Model } from 'sequelize'

export const tableName = 'users'

export const userSchema = {
  id: {
    type: DataTypes.INTEGER,
    field: 'users_id',
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },

  user: {
    allowNull: false,
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

export class Users extends Model {
  static associate(models) {
    this.hasOne(models.entidad, { foreignKey: 'users_id', as: 'entidad' })
  }

  static config(sequelize) {
    return {
      sequelize,
      modelName: 'users',
      tableName,
      timestamps: false
    }
  }
}
