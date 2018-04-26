import express from 'express'
import { WSAETIMEDOUT } from 'constants';

const wait = (millis) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, millis)
  })
}

const host = process.env.HOST || '127.0.0.1'
const port = Number(process.env.PORT) || '3000'

const app = express()

app.use(express.static('public'))
app.get('/script.js', async (req, res) => {
  const { d, l } = req.query
  await wait(d * 1000)
  res.set('Content-Type', 'application/javascript');
  res.send(`
    console.log('begin script execution');
    var l = ${l};
    for (var i=0; i<100000000 * l; i++) {}
    console.log('end script execution');
  `)
})

app.listen(port, host, () => {
  console.log(`Server listening on ${host}:${port}`)
})
