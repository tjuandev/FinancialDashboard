import { createServer } from 'miragejs'

const makeServer = () =>
  createServer({
    routes() {
      this.namespace = 'mock-api'

      this.get('/test', () => ({
        person: 'Luana',
        description: 'A mulher mais linda do mundo'
      }))
    }
  })

export default makeServer
