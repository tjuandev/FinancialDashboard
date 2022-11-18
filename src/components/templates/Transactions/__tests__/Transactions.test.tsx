/* eslint-disable @typescript-eslint/no-explicit-any */
import { render } from '@testing-library/react'
import Transactions from '..'

jest.mock('uuid')

// NOTE Move it to testHelper after

jest.mock('uuid', () => {
  const base = '9134e286-6f71-427a-bf00-'
  let current = 100000000000

  return {
    v4: () => {
      const uuid = base + current.toString()
      current++

      return uuid
    }
  }
})

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
