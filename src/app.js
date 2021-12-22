import express, { json, urlencoded } from 'express'
import routers from './routers'
import cors from 'cors'
import morgan from 'morgan'
import { boomErroHandler, errorHandler, ormError } from './middlewares/errors'
import config from './config'
const app = express()

//settings
app.set('port', config.port)

//Middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.static('public'))
app.use(urlencoded({ extended: true }))
app.use(json())

//routers
routers(app)

//midlewares error
//app.use(logError)
app.use(boomErroHandler)
app.use(ormError)
app.use(errorHandler)
export default app
