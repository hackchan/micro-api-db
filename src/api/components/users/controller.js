import UserService from './service'

const serviceUser = new UserService()

export const listarUsuarios = async (req, res, next) => {
  try {
    const usuarios = await serviceUser.findAll()
    res.json(usuarios)
  } catch (error) {
    next(error)
  }
}

export const listarUsuarioById = async (req, res, next) => {
  try {
    const { id } = req.params
    const usuario = await serviceUser.findOne(id)
    res.json(usuario)
  } catch (error) {
    next(error)
  }
}
