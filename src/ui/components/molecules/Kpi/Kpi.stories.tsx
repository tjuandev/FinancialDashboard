import Kpi from '.'
import { Meta, Story } from '@storybook/react'
import { KpiProps } from './types'

export default {
  title: 'atoms/Kpi',
  component: Kpi
} as Meta

export const Primary: Story<KpiProps> = args => <Kpi {...args} />

Primary.args = {}
