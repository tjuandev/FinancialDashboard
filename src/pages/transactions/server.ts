import { createServer } from 'miragejs'

const makeServer = (environment = 'development') =>
  createServer({
    environment,
    routes() {
      this.namespace = 'mock-api'

      this.get('http://localhost:3000/mock-api/table', () => ({
        columns: ['type', 'date', 'description', 'value'],
        rows: [
          {
            type: 'Despesa',
            date: '23-02-2004',
            description: 'Compras no submundo pós apocalíptico de Gânador',
            value: '2000'
          },
          {
            type: 'Despesa',
            date: '23-02-2004',
            description: 'Compras no submundo pós apocalíptico de Gânador',
            value: '2000'
          }
        ]
      }))

      this.get('balance-kpis', () => [
        {
          name: 'Balance',
          id: 'balance',
          value: 1290.2,
          description: 'Seu saldo atual',
          icon: 'wallet'
        },
        {
          name: 'Income',
          id: 'income',
          value: 2080.63,
          description: 'Seus ganhos',
          icon: 'stock-up'
        },
        {
          name: 'Outcome',
          id: 'outcome',
          value: 790.43,
          description: 'Suas despesas',
          icon: 'stock-down'
        }
      ])
    }
  })

export default makeServer
