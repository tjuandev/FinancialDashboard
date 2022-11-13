import { ColumnDef } from '@tanstack/react-table'

// Any used because of type error in TanStack library, see https://github.com/TanStack/table/issues/4241.
// The issue is still open in the date of this comment (11-13-2022)

export type TableProps<ColumnType> = {
  rows: ColumnType[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: ColumnDef<ColumnType, any>[]
}
