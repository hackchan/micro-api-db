import { DataTypes, Model } from 'sequelize'

export const tableName = 'tipoentidades'

export const tipoEntidadSchema = {
  id: {
    type: DataTypes.INTEGER,
    field: 'id_tipo_entidad',
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },

  nombre: {
    allowNull: false,
    type: DataTypes.STRING
  }
}

export class TipoEntidad extends Model {
  static associate(models) {
    this.hasMany(models.entidad, { foreignKey: 'id_tipo_entidad' })
  }
  static config(sequelize) {
    return {
      sequelize,
      modelName: 'tipoentidades',
      tableName,
      timestamps: false
    }
  }
}
