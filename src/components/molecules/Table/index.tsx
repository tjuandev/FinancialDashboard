import {
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table'

import { Column, Table } from './styles'
import { useState } from 'react'
import { TableProps, THeadProps } from './types'

const THead = <ColumnType,>({
  table,
  columnsExtensions
}: THeadProps<ColumnType>) => {
  return (
    <thead>
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            let columnProps
            if (columnsExtensions) {
              columnProps = columnsExtensions.find(({ id }) => id === header.id)
            }

            return (
              <Column key={header.id} {...columnProps}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </Column>
            )
          })}
        </tr>
      ))}
    </thead>
  )
}

const View = <ColumnType,>(props: TableProps<ColumnType>) => {
  const { columns, rows } = props

  const [data] = useState([...rows])

  const table = useReactTable<ColumnType>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <Table>
      <THead table={table} />
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default View
