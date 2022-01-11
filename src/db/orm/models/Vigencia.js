import { DataTypes, Model } from 'sequelize'

export const tableName = 'vigencia'

export const vigenciaSchema = {
  id: {
    type: DataTypes.INTEGER,
    field: 'id_vigencia',
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },

  nombre: {
    allowNull: false,
    type: DataTypes.STRING
  }
}

export class Vigencia extends Model {
  // static associate(models) {
  //   this.hasMany(models.entidad, { foreignKey: 'id_tipo_entidad' })
  // }
  static config(sequelize) {
    return {
      sequelize,
      modelName: 'vigencia',
      tableName,
      timestamps: false
    }
  }
}
