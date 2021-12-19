import { Router } from 'express'
import { listarUsuarios } from './controller'
const router = Router()

router.get('/', listarUsuarios)

export default router
