import { Icon } from 'components/atoms'
import { Transactions } from 'components/templates'
import { columns, rows } from './tableMock'

export default function Home() {
  return (
    <Transactions
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
}
