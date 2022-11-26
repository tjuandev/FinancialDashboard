import { ComponentProps } from 'react'
import { Header } from 'components/organisms'
import { Table } from 'components/molecules'

export type TableProps<TableType> = ComponentProps<typeof Table<TableType>>

export type Props<TableType> = {
  headerProps: ComponentProps<typeof Header>
  tableProps: TableProps<TableType>
}
