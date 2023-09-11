import Spinner from '.'
import { Meta, Story } from '@storybook/react'
import { SpinnerProps } from './types'

export default {
  title: 'atoms/Spinner',
  component: Spinner
} as Meta

export const Primary: Story<SpinnerProps> = args => <Spinner {...args} />

Primary.args = {}
