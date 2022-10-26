import Grid from '.'
import { Meta, Story } from '@storybook/react'
import { GridProps } from './types'

export default {
  title: 'atoms/Grid',
  component: Grid
} as Meta

export const Primary: Story<GridProps> = (args) => <Grid {...args} />

Primary.args = {}
