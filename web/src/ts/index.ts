import express from 'express'

const app = express()
const port = 8080

const assetsConfig = {
  root: 'src/assets',
}

app.get('/', (_, res ) => {
  res.sendFile('example.html', { root: assetsConfig.root })
})

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})
