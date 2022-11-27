import Transactions from '../index.page'

import useFetchTable from '../useFetchTable'

import { renderWithQueryClient } from 'tests/providers'

jest.mock('../useFetchTable', () => jest.fn())

const mockedUseFetchTable = useFetchTable as jest.Mock

describe('<Transactions />', () => {
  beforeEach(() => {
    mockedUseFetchTable.mockImplementation(() => ({}))
  })

  it('Should fetch useFetchTable one time', () => {
    renderWithQueryClient(<Transactions />)

    expect(useFetchTable).toHaveBeenCalledTimes(1)
  })
})
