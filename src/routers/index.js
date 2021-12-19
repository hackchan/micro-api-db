import { Router } from 'express'
import routerUser from '../api/components/users/router'

const routers = (app) => {
  const router = Router()
  app.use('/api/v1', router)
  router.use('/users', routerUser)
}

export default routers
