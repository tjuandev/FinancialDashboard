import { ComponentProps } from 'react'
import { Header } from 'ui/components/organisms'
import { Table } from 'ui/components/molecules'

export type TableProps<TableType> = ComponentProps<typeof Table<TableType>>

export type Props<TableType> = {
  headerProps: ComponentProps<typeof Header>
  tableProps: TableProps<TableType>
}
