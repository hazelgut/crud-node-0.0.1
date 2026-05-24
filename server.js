import 'dotenv/config'
import express from 'express'
import { join } from 'node:path'

const PORT = process.env.PORT
const server = express()

const unknownEnpoint = (req, res) => {
  res.status(404).json({ error: 'Unknown endpoint' })
}

server.get('/', (req, res) => {
  res.sendFile(join(import.meta.dirname, 'index.html'))
})
server.get('/index.js', (req, res) => {
  res.sendFile(join(import.meta.dirname, 'index.js'))
})
server.use(unknownEnpoint)
server.listen(PORT,() => {
  console.log('Server running on port ', PORT)
})
