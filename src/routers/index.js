import { Router } from 'express'
import routerUser from '../api/components/users/router'
import routerDeparment from '../api/components/departamentos/router'
import routerEntidad from '../api/components/entidades/router'
import routerTipoEntidad from '../api/components/tipoentidad/router'
import routerSatelital from '../api/components/satelital/router'

const routers = (app) => {
  const router = Router()
  app.use('/api/v1', router)
  router.use('/users', routerUser)
  router.use('/departments', routerDeparment)
  router.use('/entidad', routerEntidad)
  router.use('/tipo-entidad', routerTipoEntidad)
  router.use('/satelital', routerSatelital)
}

export default routers
