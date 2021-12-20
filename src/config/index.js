import dotenv from 'dotenv'

dotenv.config()

export default {
  dev: process.env.NODE_ENV === 'developmnet' ? true : false,
  port: process.env.NODE_PORT || 3000
}
