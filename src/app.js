import express from 'express'
import routers from './routers'
import { boomErroHandler, errorHandler } from './middlewares/errors'
const app = express()

//settings
app.set('port', 3000)

//Middlewares

//routers

routers(app)

//midlewares error
//app.use(logError)
app.use(boomErroHandler)
app.use(errorHandler)
export default app
