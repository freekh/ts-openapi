import express from 'express'

const app = express()
const port = 8080

const assetsConfig = {
  root: 'src/assets',
}

app.get('/', (_, res ) => {
  res.sendFile('index.html', { root: assetsConfig.root })
})

app.get('/style.css', (_, res ) => {
  res.sendFile('style.css', { root: assetsConfig.root })
})

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})
