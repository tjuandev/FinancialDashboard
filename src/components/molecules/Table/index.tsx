import {
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table'

import { Column, Table } from './styles'
import { useState } from 'react'
import { TableProps, TBodyProps, THeadProps } from './types'

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

const TBody = <ColumnType,>({ table }: TBodyProps<ColumnType>) => {
  return (
    <tbody>
      {table.getRowModel().rows.map((row) => {
        return (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => {
              return (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              )
            })}
          </tr>
        )
      })}
    </tbody>
  )
}

const View = <ColumnType,>(props: TableProps<ColumnType>) => {
  const { columns, rows, columnsExtensions } = props

  const [data] = useState([...rows])

  const table = useReactTable<ColumnType>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <Table>
      <THead table={table} columnsExtensions={columnsExtensions} />
      <TBody table={table} />
    </Table>
  )
}

export default View
