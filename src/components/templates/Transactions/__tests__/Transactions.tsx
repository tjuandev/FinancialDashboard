import { render } from '@testing-library/react'
import Transactions from '..'

jest.mock('uuid')

describe('<Transactions />', () => {
  it('Should match snapshot', () => {
    const { container } = render(
      <Transactions
        headerProps={{
          avatarProps: {
            name: 'User Test'
          },
          breadcrumbProps: {
            name: 'Test'
          }
        }}
      />
    )

    expect(container).toMatchSnapshot()
  })
})
