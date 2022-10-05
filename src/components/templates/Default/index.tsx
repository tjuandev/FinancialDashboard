import { ComponentProps } from 'react'

import { Avatar, Breadcrumb } from 'components/atoms'
import * as S from './styles'

type Props = {
  breadcrumbProps?: ComponentProps<typeof Breadcrumb>
  avatarProps?: ComponentProps<typeof Avatar>
}

const Default = ({ breadcrumbProps, avatarProps }: Props) => (
  <S.Container>
    <S.Header>
      {breadcrumbProps && <Breadcrumb {...breadcrumbProps} />}
      {avatarProps && <Avatar {...avatarProps} />}
    </S.Header>
  </S.Container>
)

export default Default
