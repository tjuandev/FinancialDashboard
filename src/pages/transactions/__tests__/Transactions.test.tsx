import useFetchTable from '../useFetchTable'

jest.mock('../useFetchTable', () => jest.fn())

const mockedUseFetchTable = useFetchTable as jest.Mock

describe('<Transactions />', () => {
  beforeEach(() => {
    mockedUseFetchTable.mockImplementation(() => ({}))
  })

  it.todo('fetch transactions data')
})
