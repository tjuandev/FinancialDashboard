import { Icon } from 'components/atoms'
import { Transactions } from 'components/templates'

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
    />
  )
}
