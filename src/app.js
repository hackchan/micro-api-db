import express from 'express'
import routers from './routers'
import cors from 'cors'
import { boomErroHandler, errorHandler } from './middlewares/errors'
import config from './config'
const app = express()

//settings
app.set('port', config.port)

//Middlewares
app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
//routers

routers(app)

//midlewares error
//app.use(logError)
app.use(boomErroHandler)
app.use(errorHandler)
export default app
