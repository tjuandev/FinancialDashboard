import IconButton from '.'
import { Meta, Story } from '@storybook/react'
import { IconButtonProps } from './types'
import { iconsLiterals } from 'components/atoms/Icon/iconsLiterals'

export default {
  title: 'molecules/IconButton',
  component: IconButton,
  argTypes: {
    name: {
      control: {
        type: 'select',
        options: Object.keys(iconsLiterals)
      }
    }
  }
} as Meta

export const Primary: Story<IconButtonProps> = (args) => (
  <IconButton {...args} />
)

Primary.args = {
  name: 'search'
}
