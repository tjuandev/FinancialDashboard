import {
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table'

import * as S from './styles'
import { useState } from 'react'
import {
  ColumnExtension,
  ColumnExtensions,
  TableProps,
  TBodyProps,
  THeadProps
} from './types'
import { Spinner } from 'ui/components/atoms'

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
              <S.Column key={id} {...columnExtensions}>
                {flexRender(column.columnDef.header, getContext())}
              </S.Column>
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
                <S.Row
                  key={cell.id}
                  horizontalAlign={columnExtensions?.horizontalAlign}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </S.Row>
              )
            })}
          </tr>
        )
      })}
    </tbody>
  )
}

const Table = <ColumnType,>(props: TableProps<ColumnType>) => {
  const { columns = [], rows = [], columnsExtensions } = props

  const [data] = useState(rows)

  const table = useReactTable<ColumnType>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  const commonProps = {
    table,
    columnsExtensions
  }

  return (
    <S.Table>
      <THead {...commonProps} />
      <TBody {...commonProps} />
    </S.Table>
  )
}

const View = <ColumnType,>(props: TableProps<ColumnType>) => {
  const { loading } = props

  if (loading) {
    return (
      <S.SpinnerWrapper>
        <Spinner />
      </S.SpinnerWrapper>
    )
  }

  return <Table<ColumnType> {...props} />
}

export default View
