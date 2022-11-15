import { render, screen } from '@testing-library/react'
import { generateTableColumns } from 'helpers/table'

import Table from '..'

type TestTableColumns = {
  column: string
}

const { accessor } = generateTableColumns<TestTableColumns>()

const columns = [
  accessor('column', {
    cell: (info) => info.getValue()
  })
]

const rows: TestTableColumns[] = [
  {
    column: 'rowContent'
  }
]

describe('<Table />a', () => {
  it('Should render column and row', () => {
    render(<Table<TestTableColumns> columns={columns} rows={rows} />)

    const columnElement = screen.getByRole('columnheader')

    const rowDataElement = screen.getByRole('cell')

    expect(columnElement).toHaveTextContent('column')
    expect(rowDataElement).toHaveTextContent('rowContent')
  })

  it('Should apply width and textAlign to column based on columnExtension', () => {
    render(
      <Table<TestTableColumns>
        columns={columns}
        rows={rows}
        columnsExtensions={[
          {
            id: 'column',
            width: '150px',
            horizontalAlign: 'center'
          }
        ]}
      />
    )

    const columnElement = screen.getByRole('columnheader')

    expect(columnElement).toHaveStyle({
      width: '150px',
      textAlign: 'center'
    })
  })

  it("Should apply textAlign to row based on columnExtension of it's column", () => {
    render(
      <Table<TestTableColumns>
        columns={columns}
        rows={rows}
        columnsExtensions={[
          {
            id: 'column',
            horizontalAlign: 'center'
          }
        ]}
      />
    )

    const rowElement = screen.getByRole('cell')

    expect(rowElement).toHaveStyle({
      textAlign: 'center'
    })
  })
})
