import { useEffect } from 'react'
import axios from 'axios'

import { createColumnHelper } from '@tanstack/react-table'

import makeServer from './server'
import { useQuery } from '@tanstack/react-query'

import {
  Columns,
  TableRequest,
  TransactionsTable,
  UseFetchTable
} from './types'

/* const actionButtonExtraStyles = css`
width: 40px;
height: 40px;

border-radius: ${theme.borderRadius.base};

:hover {
  filter: brightness(0.9);
}
`

const ActionButtons = () => (
  <ColumnActionsContainer>
  <Button padding="0.25rem" extraStyles={actionButtonExtraStyles}>
  <Icon name="outlined-trash" />
  </Button>
  <Button padding="0.25rem" extraStyles={actionButtonExtraStyles}>
  <Icon name="outlined-edit" />
  </Button>
  </ColumnActionsContainer>
  ) */

const columnHelper = createColumnHelper<TransactionsTable>()

const useFetchTable = (): UseFetchTable => {
  useEffect(() => {
    makeServer()
  }, [])

  const { data } = useQuery<TableRequest>({
    queryKey: ['transactions-table'],
    queryFn: () =>
      axios.get('http://localhost:3000/mock-api/table').then((res) => res.data)
  })

  const { columns, rows } = data ?? {}

  const columnsAdapted = columns?.map((column) =>
    columnHelper.accessor(column, {
      header: 'Type',
      cell: (info) => info.getValue()
    })
  )

  return {
    columns: columnsAdapted as Columns,
    rows
  }
}

export default useFetchTable
