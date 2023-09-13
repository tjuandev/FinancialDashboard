import axios from 'axios'

import makeServer from './server'
import { useQuery } from '@tanstack/react-query'

import {
  Columns,
  TableRequest,
  TransactionsTable,
  UseFetchTable
} from './types'
import { generateTableColumns } from 'helpers/table'
import { capitalize } from 'helpers/string'

const columnHelper = generateTableColumns<TransactionsTable>()

makeServer()

const useFetchTable = (): UseFetchTable => {
  const { data, isLoading } = useQuery<TableRequest>({
    queryKey: ['transactions-table'],
    queryFn: () =>
      axios.get('http://localhost:3000/mock-api/table').then(res => res.data)
  })

  const { columns, rows } = data ?? {}

  const columnsAdapted = columns?.map(column =>
    columnHelper.accessor(column, {
      header: capitalize(column)
    })
  )

  return {
    columns: columnsAdapted as Columns,
    rows,
    isLoading
  }
}

export default useFetchTable
