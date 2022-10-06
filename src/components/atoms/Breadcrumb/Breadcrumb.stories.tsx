import { Meta, Story } from '@storybook/react'

import Breadcrumb from '.'
import Icon from '../Icon'
import { BreadcrumbProps } from './types'

export default {
  title: 'Breadcrumb',
  component: Breadcrumb,
  argTypes: {
    icon: {
      name: 'Icon Name',
      type: { name: '', required: false },
      defaultValue: 'transactions'
    }
  }
} as Meta<typeof Breadcrumb>

export const Primary: Story<BreadcrumbProps> = (args) => (
  <Breadcrumb {...args} />
)

Primary.args = {
  name: 'Transações',
  icon: <Icon name="transactions" />
}
