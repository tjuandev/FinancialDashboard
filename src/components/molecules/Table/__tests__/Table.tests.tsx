import { render, screen } from '@testing-library/react'
import { generateTableColumns } from 'helpers/table'

import Table from '..'

type TestTable = {
  column: string
}

const { accessor } = generateTableColumns<TestTable>()

const columns = [
  accessor('column', {
    cell: (info) => info.getValue()
  })
]

const rows: TestTable[] = [
  {
    column: 'row'
  }
]

describe('<Table />', () => {
  it('Should render column and row', () => {
    render(<Table<TestTable> columns={columns} rows={rows} />)

    const columnElement = screen.getByRole('columnheader')

    const rowDataElement = screen.getByRole('cell')

    expect(columnElement).toHaveTextContent('column')
    expect(rowDataElement).toHaveTextContent('row')
  })
})
