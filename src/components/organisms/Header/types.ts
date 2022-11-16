import { Avatar } from 'components/atoms'
import { Breadcrumb } from 'components/molecules'

import { ComponentProps } from 'react'

export type HeaderProps = {
  breadcrumbProps?: ComponentProps<typeof Breadcrumb>
  avatarProps?: ComponentProps<typeof Avatar>
}
