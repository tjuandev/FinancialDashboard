import Select from '.'
import { Meta, Story } from '@storybook/react'
import { SelectProps } from './types'

export default {
  title: 'atoms/Select',
  component: Select
} as Meta

export const Primary: Story<SelectProps> = (args) => <Select {...args} />

Primary.args = {}
