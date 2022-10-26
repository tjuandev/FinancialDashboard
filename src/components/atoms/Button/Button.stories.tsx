import { Meta, Story } from '@storybook/react'

import Button from '.'
import { ButtonProps } from './types'

export default {
  title: 'Atoms/Button',
  component: Button
} as Meta<typeof Button>

export const Primary: Story<ButtonProps> = (args) => (
  <Button {...args}>Storybook Button</Button>
)

Primary.args = {
  width: 'fit-content',
  height: 'fit-content'
}
