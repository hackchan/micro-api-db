import express from 'express'
import routers from './routers'
const app = express()

//settings
app.set('port', 3000)

//Middlewares

//routers

routers(app)

//midlewares error

export default app
