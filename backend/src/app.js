import express from 'express'
import PoliciaisRoutes from './routes/policiais.route.js'
import dotenv from 'dotenv'
import cors from 'cors'

const app = express()

dotenv.config()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


const port = process.env.APP_PORT 

app.use(PoliciaisRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})