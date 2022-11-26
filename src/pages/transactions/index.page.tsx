import { Icon } from 'components/atoms'
import { Transactions } from 'components/templates'
import { TransactionsTable } from './types'

import useFetchTable from './useFetchTable'

export default function Home() {
  const { columns, rows } = useFetchTable()

  const showTable = columns && rows

  return (
    showTable && (
      <Transactions<TransactionsTable>
        headerProps={{
          breadcrumbProps: {
            name: 'Transactions',
            icon: <Icon name="transactions" />
          },
          avatarProps: {
            name: 'Miguel Rodrigo',
            description: 'Product Design UX/UI'
          }
        }}
        tableProps={{ columns, rows }}
      />
    )
  )
}
