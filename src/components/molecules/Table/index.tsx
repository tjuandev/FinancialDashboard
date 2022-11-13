import {
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table'

import { useState } from 'react'

import { TableProps } from './types'

const Table = <ColumnType,>(props: TableProps<ColumnType>) => {
  const { columns, rows } = props

  const [data] = useState([...rows])

  const table = useReactTable<ColumnType>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
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
    </table>
  )
}

export default Table
