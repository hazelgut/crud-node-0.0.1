import 'dotenv/config'
import express from 'express'
import cors from 'cors'

const server = express()
const PORT = process.env.DBPORT
const notes = [
  { id: 1, content: 'Japan is heaven', important: true },
  { id: 2, content: 'Latvia is shit', important: true },
  { id: 3, content: 'Sugar is nice', important: false },
]

const unknownEnpoint = (req, res) => {
  res.status(404).json({ error: 'unknown endpoint' })
}

server.use(
  cors({
    origin: ['http://localhost:4588',]
  }),
)
server.get('/notes', (req, res) => {
  console.log('Route is hit')
  res.json(notes)
})

server.use(unknownEnpoint)
server.listen(PORT, () => {
  console.log('DB Server running on port ', PORT)
})
