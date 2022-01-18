import { Department, DepartmentSchema } from './Deparments'
import { Satelital, SatelitalSchema } from './Satelital'
import { TipoEntidad, tipoEntidadSchema } from './TipoEntidad'
import { Entidad, entidadSchema } from './Entidad'

import { Circular, circularSchema } from './Circular'
import { Diccionario, diccionarioSchema } from './Diccionario'
import { Reporte, reporteSchema } from './Reporte'
import { Vigencia, vigenciaSchema } from './Vigencia'
import { Informado, informadoSchema } from './Informado'
import {
  EjecucionPresupuestalIngresos,
  ejecucionPresupuestalIngresoSchema
} from './EjecucionPresupuestalIngresos'
import { Users, userSchema } from './Users'
/**Aqui vamos a inicializar todos los modelos */

function setupModel(sequelize) {
  Satelital.init(SatelitalSchema, Satelital.config(sequelize))
  Department.init(DepartmentSchema, Department.config(sequelize))
  Entidad.init(entidadSchema, Entidad.config(sequelize))
  Users.init(userSchema, Users.config(sequelize))
  TipoEntidad.init(tipoEntidadSchema, TipoEntidad.config(sequelize))
  Circular.init(circularSchema, Circular.config(sequelize))
  Reporte.init(reporteSchema, Reporte.config(sequelize))
  Diccionario.init(diccionarioSchema, Diccionario.config(sequelize))
  Vigencia.init(vigenciaSchema, Vigencia.config(sequelize))
  Informado.init(informadoSchema, Informado.config(sequelize))
  EjecucionPresupuestalIngresos.init(
    ejecucionPresupuestalIngresoSchema,
    EjecucionPresupuestalIngresos.config(sequelize)
  )

  //associations
  Department.associate(sequelize.models)
  Entidad.associate(sequelize.models)
  TipoEntidad.associate(sequelize.models)
  Informado.associate(sequelize.models)
  EjecucionPresupuestalIngresos.associate(sequelize.models)

  //
  Diccionario.associate(sequelize.models)
  Users.associate(sequelize.models)
}

export default setupModel
