import { createColumnHelper } from '@tanstack/react-table'
import { Button, Icon } from 'components/atoms'
import { Table } from 'components/molecules'
import { css } from 'styled-components'
import theme from 'theme'

import { ColumnActionsContainer } from './styles'

type TransactionsTable = {
  type: string
  date: string
  description: {
    value: string
    columnWidth: string
  }
  value: string
}

const columnHelper = createColumnHelper<TransactionsTable>()

const actionButtonExtraStyles = css`
  width: 40px;
  height: 40px;

  border-radius: ${theme.borderRadius.base};

  :hover {
    filter: brightness(0.9);
  }
`

const tableColumns = [
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

const rows: TransactionsTable[] = [
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

const TransactionsTable = () => {
  return (
    <Table<TransactionsTable>
      columns={tableColumns}
      rows={rows}
      columnsExtensions={[
        {
          id: 'actions',
          horizontalAlign: 'end'
        }
      ]}
    />
  )
}

export default TransactionsTable
