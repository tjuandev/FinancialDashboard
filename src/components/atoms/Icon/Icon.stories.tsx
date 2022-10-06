import { Meta, Story } from '@storybook/react'

import Icon from '.'
import { IconsProps } from './types'

export default {
  title: 'Breadcrumb',
  component: Icon
} as Meta<typeof Icon>

export const Primary: Story<IconsProps> = (args) => <Icon {...args} />

Primary.args = {
  name: 'notification'
}
