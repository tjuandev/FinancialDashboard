import { createColumnHelper } from '@tanstack/react-table'

export const generateTableColumns = <CreateColumnType>() => {
  const columnHelper = createColumnHelper<CreateColumnType>()

  return columnHelper
}
