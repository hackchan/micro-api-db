import { Router } from 'express'
import { listarSatelitales } from './controller'
const router = Router()

router.get('/', listarSatelitales)

export default router
