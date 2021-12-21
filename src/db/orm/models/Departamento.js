import { DataTypes } from 'sequelize'
import sequelize from '../sequelize'

const Deparmets = sequelize.define(
  'departamentos',
  {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true
    },

    nombre: {
      allowNull: false,
      type: DataTypes.STRING
    },

    idSatelital: {
      allowNull: false,
      type: DataTypes.INTEGER
    },

    longitud: {
      allowNull: true,
      type: DataTypes.REAL
    },
    latitud: {
      allowNull: true,
      type: DataTypes.REAL
    }
  },
  { timestamps: false }
)
export default Deparmets
