import Table from '.'
import { Meta, Story } from '@storybook/react'
import { TableProps } from './types'

export default {
  title: 'molecules/Table',
  component: Table
} as Meta

export const Primary: Story<TableProps> = (args) => <Table {...args} />

Primary.args = {}
