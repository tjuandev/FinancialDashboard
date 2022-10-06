import Avatar from './index'
import { Meta, Story } from '@storybook/react'
import { AvatarProps } from './types'

export default {
  title: 'Avatar',
  component: Avatar
} as Meta

export const Primary: Story<AvatarProps> = (args) => <Avatar {...args} />

Primary.args = {
  name: 'Thiago Juan',
  description: 'Web Developer'
}
