import { ColumnDef, Table } from '@tanstack/react-table'
// Any used because of type error in TanStack library, see https://github.com/TanStack/table/issues/4241.
// The issue is still open in the date of this comment (11-13-2022)

export type ColumnExtension = {
  id?: string
  width?: string
  horizontalAlign?: 'start' | 'center' | 'end'
}

export type ColumnExtensions = ColumnExtension[]

export type TableProps<ColumnType> = {
  rows: ColumnType[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: ColumnDef<ColumnType, any>[]
  columnsExtensions?: ColumnExtensions
}

export type THeadProps<ColumnType> = {
  table: Table<ColumnType>
  columnsExtensions?: ColumnExtensions
}

export type TBodyProps<ColumnType> = Pick<
  THeadProps<ColumnType>,
  'table' | 'columnsExtensions'
>

export type ColumnProps = ColumnExtension
export type RowProps = Pick<ColumnExtension, 'horizontalAlign'>
