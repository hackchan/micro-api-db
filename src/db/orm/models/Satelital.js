import { DataTypes } from 'sequelize'
import sequelize from '../sequelize'
import Departamento from './Departamento'
const Satelital = sequelize.define(
  'satelital',
  {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true
    },

    nombre: {
      allowNull: false,
      type: DataTypes.STRING
    }
  },
  {
    timestamps: false
  }
)
Satelital.hasMany(Departamento, { foreignKey: 'idSatelital', sourceKey: 'id' })
Departamento.belongsTo(Satelital, { foreignKey: 'idSatelital', sourceKey: 'id' })

export default Satelital
