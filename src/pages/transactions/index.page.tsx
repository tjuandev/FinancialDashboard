import { Icon } from 'ui/components/atoms'
import { Transactions } from 'ui/components/templates'
import { TransactionsTable } from './types'

import useFetchTable from './useFetchTable'

export default function Home() {
  const { columns, rows, isLoading } = useFetchTable()

  return (
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
      tableProps={{ columns, rows, loading: isLoading }}
    />
  )
}
