import { Router } from 'express'
import { listarUsuarios, listarUsuarioById } from './controller'
const router = Router()

router.get('/', listarUsuarios)
router.get('/:id', listarUsuarioById)

export default router
