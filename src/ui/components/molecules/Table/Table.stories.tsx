import Table from '.'
import { Meta } from '@storybook/react'
import { TableProps } from './types'

export default {
  title: 'molecules/Table',
  component: Table
} as Meta

export const Primary = (args: TableProps<unknown>) => <Table {...args} />

Primary.args = {}
