import { success } from '../../../utils/response'
import SatelitalService from './service'

const serviceSatelital = new SatelitalService()

export const listarSatelitales = async (req, res, next) => {
  try {
    const lista = await serviceSatelital.findall()
    success(req, res, lista, 200)
  } catch (error) {
    next(error)
  }
}
