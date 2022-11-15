import {
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table'

import { Column, Row, Table } from './styles'
import { useState } from 'react'
import {
  ColumnExtension,
  ColumnExtensions,
  TableProps,
  TBodyProps,
  THeadProps
} from './types'

const getColumnExtensionsProps = (
  columnsExtensions?: ColumnExtensions,
  currentCellId?: string
): ColumnExtension | undefined => {
  return columnsExtensions?.find(({ id }) => id === currentCellId)
}

const THead = <ColumnType,>({
  table,
  columnsExtensions
}: THeadProps<ColumnType>) => {
  return (
    <thead>
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            const { id, column, getContext } = header

            const columnExtensions = getColumnExtensionsProps(
              columnsExtensions,
              id
            )

            return (
              <Column key={id} {...columnExtensions}>
                {flexRender(column.columnDef.header, getContext())}
              </Column>
            )
          })}
        </tr>
      ))}
    </thead>
  )
}

const TBody = <ColumnType,>({
  table,
  columnsExtensions
}: TBodyProps<ColumnType>) => {
  return (
    <tbody>
      {table.getRowModel().rows.map((row) => {
        return (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => {
              const {
                column: { id }
              } = cell

              const columnExtensions = getColumnExtensionsProps(
                columnsExtensions,
                id
              )

              return (
                <Row
                  key={cell.id}
                  horizontalAlign={columnExtensions?.horizontalAlign}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Row>
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
      <TBody table={table} columnsExtensions={columnsExtensions} />
    </Table>
  )
}

export default View
