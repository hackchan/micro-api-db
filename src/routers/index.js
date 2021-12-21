import { Router } from 'express'
import routerUser from '../api/components/users/router'
import routerDeparment from '../api/components/departamentos/router'
const routers = (app) => {
  const router = Router()
  app.use('/api/v1', router)
  router.use('/users', routerUser)
  router.use('/departments', routerDeparment)
}

export default routers
