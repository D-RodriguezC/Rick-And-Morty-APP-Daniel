// const http = require('http')
// const { getCharById } = require('./controllers/getCharById')

// http
//   .createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     if (req.url.includes('/rickandmorty/character')) {
//       const id = req.url.split('/').at(-1)

//       getCharById(res, +id)
//     }
//   })
//   .listen(3001, 'localhost')

const server = require('./app')
const { conn } = require('./DB_connection')
const PORT = 3001

server.listen(PORT, () => {
  console.log(`Server raised in port: ' +${PORT}`)
})
