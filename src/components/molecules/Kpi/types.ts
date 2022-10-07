import { Icon } from 'components/atoms'
import { ComponentProps } from 'react'

export type KpiProps = {
  name: string
  description: string
  iconName?: ComponentProps<typeof Icon>['name']
}
