import { DataTypes, Model } from 'sequelize'

export const tableName = 'ejecucion_presupuestal_ingresos'

export const ejecucionPresupuestalIngresoSchema = {
  id: {
    type: DataTypes.INTEGER,
    field: 'id_ejepre',
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },

  anioReporte: {
    field: 'anio_reporte',
    allowNull: false,
    type: DataTypes.INTEGER
  },

  vigencia: {
    allowNull: false,
    type: DataTypes.STRING
  },

  nitEntidadReportante: {
    field: 'nit_entidad_reportante',
    allowNull: false,
    type: DataTypes.INTEGER
  },

  nombreEntidadReportante: {
    field: 'nombre_entidad_reportante',
    allowNull: false,
    type: DataTypes.STRING
  },

  codigoPresupuestal: {
    field: 'codigo_presupuestal',
    allowNull: false,
    type: DataTypes.STRING
  },

  macroCampoNivelAgregado: {
    field: 'macro_campo_nivel_agregado',
    allowNull: false,
    type: DataTypes.STRING
  },

  nombreRubro: {
    field: 'nombre_rubro',
    allowNull: false,
    type: DataTypes.STRING
  },

  presupuestoInicial: {
    field: 'presupuesto_inicial',
    allowNull: false,
    type: DataTypes.REAL
  },

  adicionesPeriodo: {
    field: 'adiciones_del_periodo',
    allowNull: false,
    type: DataTypes.REAL
  },

  adicionesAcumulada: {
    field: 'adiciones_acumuladas',
    allowNull: false,
    type: DataTypes.REAL
  },

  reduccionesPeriodo: {
    field: 'reducciones_del_periodo',
    allowNull: false,
    type: DataTypes.REAL
  },

  reduccionesAcumuladas: {
    field: 'reducciones_acumuludas',
    allowNull: false,
    type: DataTypes.REAL
  },

  apropiacionDefinitiva: {
    field: 'apropiacion_definitiva',
    allowNull: false,
    type: DataTypes.REAL
  },

  reconocimientosDelPeriodo: {
    field: 'reconocimientos_del_periodo',
    allowNull: false,
    type: DataTypes.REAL
  },

  reconocimientosAcumulados: {
    field: 'reconocimientos_acumulados',
    allowNull: false,
    type: DataTypes.REAL
  },

  recaudosDelPeriodo: {
    field: 'recaudos_del_periodo',
    allowNull: false,
    type: DataTypes.REAL
  },

  recaudosAcumulados: {
    field: 'recaudos_acumulados',
    allowNull: false,
    type: DataTypes.REAL
  },

  fechaReporte: {
    field: 'fecha_reporte',
    allowNull: false,
    type: DataTypes.DATE
  },

  informadoId: {
    field: 'informado_id',
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: 'informado',
      key: 'informado_id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

export class EjecucionPresupuestalIngresos extends Model {
  static associate(models) {
    this.belongsTo(models.informado, { foreignKey: 'informado_id' })
  }

  static config(sequelize) {
    return {
      sequelize,
      modelName: 'ejecucion_presupuestal_ingresos',
      tableName,
      timestamps: false
    }
  }
}
