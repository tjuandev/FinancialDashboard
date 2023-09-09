import Header from '.'
import { Meta, Story } from '@storybook/react'
import { HeaderProps } from './types'

export default {
  title: 'organisms/Header',
  component: Header
} as Meta

export const Primary: Story<HeaderProps> = (args) => <Header {...args} />

Primary.args = {}
