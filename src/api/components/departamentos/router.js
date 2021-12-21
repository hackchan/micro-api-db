import { Router } from 'express'
import { createDepartment } from './controller'
const router = Router()

router.post('/', createDepartment)

export default router
