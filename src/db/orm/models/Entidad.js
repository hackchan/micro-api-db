import { DataTypes, Model } from 'sequelize'

export const tableName = 'entidad'

export const entidadSchema = {
  id: {
    type: DataTypes.INTEGER,
    field: 'id_entidad',
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },

  nombre: {
    allowNull: false,
    type: DataTypes.STRING
  },

  db: {
    allowNull: false,
    type: DataTypes.STRING
  },

  tipoEntidad: {
    field: 'id_tipo_entidad',
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: 'tipoentidades',
      key: 'id_tipo_entidad'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },

  departId: {
    field: 'depart_id',
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: 'department',
      key: 'depart_id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

export class Entidad extends Model {
  static associate(models) {
    this.belongsTo(models.tipoentidades, { foreignKey: 'id_tipo_entidad' })
    this.belongsTo(models.department, { foreignKey: 'depart_id' })
  }

  static config(sequelize) {
    return {
      sequelize,
      modelName: 'entidad',
      tableName,
      timestamps: false
    }
  }
}
