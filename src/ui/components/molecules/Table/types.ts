import { ColumnDef, Table } from '@tanstack/react-table'

export type ColumnExtension = {
  horizontalAlign?: 'start' | 'center' | 'end'
  id?: string
  width?: string
}

export type ColumnExtensions = ColumnExtension[]

export type Columns<ColumnType> = ColumnDef<ColumnType, unknown>[]

export type TableProps<ColumnType> = {
  columns?: Columns<ColumnType>
  columnsExtensions?: ColumnExtensions
  loading?: boolean
  rows?: ColumnType[]
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
