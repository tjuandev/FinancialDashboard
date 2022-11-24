import { useEffect } from 'react'
import axios from 'axios'

import { createColumnHelper } from '@tanstack/react-table'
import { Button, Icon } from 'components/atoms'

import theme from 'theme'
import { css } from 'styled-components'

import makeServer from './server'
import { ColumnActionsContainer } from './styles'

import { useQuery } from '@tanstack/react-query'

import {
  Columns,
  TableRequest,
  TransactionsTable,
  UseFetchTable
} from './types'

const columnHelper = createColumnHelper<TransactionsTable>()

const actionButtonExtraStyles = css`
  width: 40px;
  height: 40px;

  border-radius: ${theme.borderRadius.base};

  :hover {
    filter: brightness(0.9);
  }
`

export const columns = [
  columnHelper.accessor('type', {
    header: 'Type',
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor('date', {
    header: 'Date',
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor('description', {
    header: 'Description',
    cell: (info) => info.getValue().value
  }),
  columnHelper.accessor('value', {
    header: 'Value',
    cell: (info) => info.getValue()
  }),
  columnHelper.display({
    id: 'actions',
    header: 'Actions',
    cell: () => (
      <ColumnActionsContainer>
        <Button padding="0.25rem" extraStyles={actionButtonExtraStyles}>
          <Icon name="outlined-trash" />
        </Button>
        <Button padding="0.25rem" extraStyles={actionButtonExtraStyles}>
          <Icon name="outlined-edit" />
        </Button>
      </ColumnActionsContainer>
    )
  })
]

export const rows: TransactionsTable[] = [
  {
    type: 'Despesa',
    date: '2022-02-2004',
    description: {
      value: 'Compras no submundo pós apocalíptico de Gânador',
      columnWidth: '100px'
    },
    value: '2000'
  },
  {
    type: 'Despesa',
    date: '2022-02-2004',
    description: {
      value: 'Compras no submundo pós apocalíptico de Gânador',
      columnWidth: '100px'
    },
    value: '2000'
  },
  {
    type: 'Despesa',
    date: '2022-02-2004',
    description: {
      value: 'Compras no submundo pós apocalíptico de Gânador',
      columnWidth: '100px'
    },
    value: '2000'
  }
]

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
