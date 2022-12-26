import path from 'path'
import address from 'address'
import chalk from 'chalk'

import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import bodyParser from 'body-parser'
import fileUpload from 'express-fileupload'

import config from './config'
import loaders from './loaders'
import errorHandler from './middlewares/errorHandler'

import ApiRoutes from './routes'

config()
loaders()

const app = express()

app.use(
  fileUpload({
    createParentPath: true,
  })
)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(helmet())
app.use(cors())

app.use('/uploads', express.static(path.join(__dirname, '../uploads')))

const PORT = process.env.APP_PORT || 3001
const HOST = process.env.APP_HOST || address.ip()

app.listen(PORT, HOST, () => {
  console.log(
    [
      chalk.green('➜ '),
      chalk.bold('Sunucu ayağa kalktı') + '..',
      chalk.blue(`http://${HOST}:${PORT}/`),
    ].join(' ')
  )
  app.use('/api', ApiRoutes)
  app.use(errorHandler)

  app.use(express.static(path.join(__dirname, '../client')))

  app.use('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, '../client', 'index.html'))
  })
})
