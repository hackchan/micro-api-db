import { DataTypes, Model } from 'sequelize'
import { tableName as tableNameAuth } from './Auth'
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
    allowNull: false,
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
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: 'department',
      key: 'depart_id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },

  authId: {
    field: 'auth_id',
    allowNull: false,
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

export class Entidad extends Model {
  static associate(models) {
    this.belongsTo(models.auth, { foreignKey: 'auth_id', as: 'auth' })
    this.belongsTo(models.tipoentidades, {
      foreignKey: 'id_tipo_entidad',
      as: 'tipo'
    })
    this.belongsTo(models.department, { foreignKey: 'depart_id', as: 'depart' })
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
