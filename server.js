import express from 'express'
import { join } from 'node:path'

const notes = [
  { id: 1, content: 'Note 1' },
  { id: 2, content: 'Note 2' },
  { id: 3, content: 'Note 3' },
]
const PORT = process.env.PORT
const server = express()

const unknownEnpoint = (req, res) => {
  res.status(404).json({ error: 'Unknown endpoint' })
}
server.use(express.static(join(import.meta.dirname, 'dist')))

server.get('/', (req, res) => {
  res.sendFile(join(import.meta.dirname, 'dist', 'index.html'))
})
server.get('/notes', (req, res) => {
  res.json(notes)
})

server.use(unknownEnpoint)
server.listen(PORT, () => {
  console.log('Server running on port ', PORT)
})
