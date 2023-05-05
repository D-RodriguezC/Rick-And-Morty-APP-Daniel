const app = require('../src/app')
const session = require('supertest')
const { describe } = require('node:test')
const request = session(app)
const character = {
  id: 923,
  name: 'dani',
  species: 'human',
  gender: 'female',
  status: 'alive',
  origin: { name: 'earth' },
  image: 'image.jpg',
}

describe('test de RUTAS', () => {
  describe('GET /rickandmorty/character/:id', () => {
    it('Responde con status: 200', async () => {
      const response = await request.get('/rickandmorty/character/1')
      expect(response.statusCode).toBe(200)
    })
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" , "image"', async () => {
      const response = await request.get('/rickandmorty/character/1')

      const props = [
        'id',
        'name',
        'species',
        'gender',
        'status',
        'origin',
        'image',
      ]
      props.forEach((prop) => {
        expect(response.body).toHaveProperty(prop)
      })
    })
    it('Si hay un error responde con status: 500', async () => {
      const response = await request.get('/rickandmorty/character/233444')
      expect(response.statusCode).toBe(500)
    })
  })
  describe('GET /rickandmorty/login', () => {
    it('responde con un objeto con la propiedad access en true si la información del usuario es valida', async () => {
      const response = await request.get(
        '/rickandmorty/login?email=dani@gmail.com&password=1234df'
      )
      const access = { access: true }
      expect(response.body).toEqual(access)
    })
    it('responde con un objeto con la propiedad access en true si la información del usuario es valida', async () => {
      const response = await request.get(
        '/rickandmorty/login?email=dani@gmail.com&password=1234dfggg'
      )
      const access = { access: false }
      expect(response.body).toEqual(access)
    })
  })
  describe('POST /rickandmorty/fav', () => {
    it('debe guardar el personaje en favoritos', async () => {
      const response = await request.post('/rickandmorty/fav').send(character)
      expect(response.body).toContainEqual(character)
    })
    it('debe agregar personajes a favoritos sin eliminar los existentes', async () => {
      character.id = 1923
      character.name = 'ft 37a'

      const response = await request.post('/rickandmorty/fav').send(character)
      expect(response.body.length).toBe(2)
    })
  })
  describe('DELETE /rickandmorty/fav/:id', () => {
    it('si el id solicitado no existe, debería retornar un arreglo con todos los favoritos', async () => {
      const response = await request.delete('/rickandmorty/fav/2ghgj')
      expect(response.body.length).toBe(2)
    })
    it('si el id enviado debería eliminarlo de favoritos', async () => {
      const response = await request.delete('/rickandmorty/fav/1923')
      expect(response.body.length).toBe(1)
    })
  })
})

// expect(response.body).toHaveProperty("id")
// expect(response.body).toHaveProperty( "name")
// expect(response.body).toHaveProperty("species", )
// expect(response.body).toHaveProperty("gender", )
// expect(response.body).toHaveProperty("status", )
// expect(response.body).toHaveProperty( "origin" )
// expect(response.body).toHaveProperty("image")asi tambien se puede
