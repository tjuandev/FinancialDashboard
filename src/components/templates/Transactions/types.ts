import { ComponentProps } from 'react'
import { Header } from 'components/organisms'
import { Table } from 'components/molecules'

export type Props = {
  headerProps: ComponentProps<typeof Header>
  tableProps: ComponentProps<typeof Table>
}
