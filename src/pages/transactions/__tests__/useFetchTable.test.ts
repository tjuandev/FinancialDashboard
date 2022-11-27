import { Wrapper } from 'tests/providers/renderWithQueryClient'

import { renderHook, waitFor } from '@testing-library/react'
import useFetchTable from '../useFetchTable'

import makeServer from '../server'
import { Server } from 'miragejs'
import axios from 'axios'
import { capitalize } from 'helpers/string'

describe('useFetchTable', () => {
  let server: Server

  beforeEach(() => {
    server = makeServer('test')
  })

  afterEach(() => {
    server.shutdown()
  })

  it('isLoading should be true at the first time and false at end of the request', async () => {
    const { result } = renderHook(useFetchTable, {
      wrapper: Wrapper
    })

    expect(result.current.isLoading).toBeTruthy()

    await waitFor(() => {
      expect(result.current.isLoading).toBeFalsy()
    })
  })

  it('Should return columns and rows adapted to work in a table', async () => {
    const {
      result: { current }
    } = renderHook(useFetchTable, {
      wrapper: Wrapper
    })

    const {
      data: { columns }
    } = await axios.get('http://localhost:3000/mock-api/table')

    await waitFor(() => {
      const firstColumnAdapted = current.columns[0]

      expect(firstColumnAdapted).toEqual({
        accessorKey: columns[0],
        header: capitalize(columns[0])
      })

      expect(current.rows).toBeDefined()
    })
  })
})
