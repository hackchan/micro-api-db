import { DataTypes } from 'sequelize'
import sequelize from '../sequelize'

const Users = sequelize.define('users', {
  id: {
    allowNull: false,
    type: DataTypes.STRING,
    primaryKey: true
  },

  name: {
    allowNull: false,
    type: DataTypes.STRING
  },

  avatar: {
    allowNull: false,
    type: DataTypes.STRING
  },

  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  }
},{
  timestamps:false
})

export default Users