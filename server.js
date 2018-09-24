import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from './webpack.config.babel.js'

const app = express()
const compiler = webpack(config)
const port = 3000

app.use(
  webpackMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  })
)

app.use(webpackHotMiddleware(compiler))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, 'localhost', err => {
  if (err) {
    console.log(err)
    return
  }

  console.log(`Listening at http://localhost:${port}`)
})
