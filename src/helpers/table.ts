import { ColumnHelper, createColumnHelper } from '@tanstack/react-table'

export const generateTableColumns = <
  CreateColumnType
>(): ColumnHelper<CreateColumnType> => {
  const { accessor, display, group } = createColumnHelper<CreateColumnType>()

  return {
    accessor,
    display,
    group
  }
}
