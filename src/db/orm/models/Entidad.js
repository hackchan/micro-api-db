import { DataTypes, Model } from 'sequelize'
import { tableName as tableNameAuth } from './Auth'
export const tableName = 'entidades'

export const entidadSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },

  nombre: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING
  },

  db: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING
  },

  tipoEntidad: {
    field: 'tipo_entidad_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ' ',
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
