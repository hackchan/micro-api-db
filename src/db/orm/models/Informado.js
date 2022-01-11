import { DataTypes, Model } from 'sequelize'

export const tableName = 'informado'

export const informadoSchema = {
  id: {
    type: DataTypes.INTEGER,
    field: 'informado_id',
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },

  reportId: {
    field: 'reporte_id',
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: 'reportes',
      key: 'reporte_id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },

  circularId: {
    field: 'id_circular',
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: 'circular',
      key: 'id_circular'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },

  entidadId: {
    field: 'id_entidad',
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: 'entidad',
      key: 'id_entidad'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },

  vigenciaId: {
    field: 'id_vigencia',
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: 'vigencia',
      key: 'id_vigencia'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  fechaInicio: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'fecha_inicio'
  },
  fechaFinal: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'fecha_final'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: DataTypes.NOW
  }
}

export class Informado extends Model {
  static associate(models) {
    this.belongsTo(models.reportes, { foreignKey: 'reporte_id' })
    this.belongsTo(models.circular, { foreignKey: 'id_circular' })
    this.belongsTo(models.entidad, { foreignKey: 'id_entidad' })
    this.belongsTo(models.entidad, { foreignKey: 'id_vigencia' })
  }

  static config(sequelize) {
    return {
      sequelize,
      modelName: 'informado',
      tableName,
      timestamps: false
    }
  }
}
