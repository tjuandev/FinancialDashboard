import Avatar from './index'
import { Meta, Story } from '@storybook/react'

export default {
  title: 'Avatar',
  component: Avatar
} as Meta

export const Primary: Story = (args) => (
  <Avatar name="Thiago Juan" description="Student" {...args} />
)

Primary.args = {
  variant: 'primary'
}
