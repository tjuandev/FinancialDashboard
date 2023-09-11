import Select from '.'
import { Meta } from '@storybook/react'
import { Props as SelectProps } from 'react-select'

export default {
  title: 'atoms/Select',
  component: Select
} as Meta

export const Primary = (args: SelectProps) => <Select {...args} />

Primary.args = {}
