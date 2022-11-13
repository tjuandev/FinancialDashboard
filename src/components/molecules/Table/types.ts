import { ColumnDef } from '@tanstack/react-table'

export type TableProps<ColumnType> = {
  rows: ColumnType[]
  columns: ColumnDef<ColumnType, string | number>[]
}
