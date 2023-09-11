import { Avatar } from 'ui/components/atoms'
import { Breadcrumb } from 'ui/components/molecules'

import { ComponentProps } from 'react'

export type HeaderProps = {
  avatarProps?: ComponentProps<typeof Avatar>
  breadcrumbProps?: ComponentProps<typeof Breadcrumb>
}
