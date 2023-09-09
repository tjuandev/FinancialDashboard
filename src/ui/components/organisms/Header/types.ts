import { Avatar } from 'ui/components/atoms'
import { Breadcrumb } from 'ui/components/molecules'

import { ComponentProps } from 'react'

export type HeaderProps = {
  breadcrumbProps?: ComponentProps<typeof Breadcrumb>
  avatarProps?: ComponentProps<typeof Avatar>
}
