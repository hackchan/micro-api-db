import { DataTypes } from 'sequelize'
import sequelize from '../sequelize'

const Department = sequelize.define('departamentos',
  {
    id: {
      field:'id_depart',
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true
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
    }
  },
  { timestamps: false}
)

export default Department
