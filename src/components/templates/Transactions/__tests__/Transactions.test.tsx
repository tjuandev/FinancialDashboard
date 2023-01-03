/* eslint-disable @typescript-eslint/no-explicit-any */
import { render } from '@testing-library/react'
import Transactions from '..'

describe('<Transactions />', () => {
  it('Should match snapshot', () => {
    const { container } = render(
      <Transactions<any>
        headerProps={{
          avatarProps: {
            name: 'User Test'
          },
          breadcrumbProps: {
            name: 'Test'
          }
        }}
        tableProps={{
          columns: [],
          rows: []
        }}
      />
    )

    expect(container).toMatchSnapshot()
  })
})
