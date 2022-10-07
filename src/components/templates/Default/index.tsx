import { ComponentProps, ReactNode } from 'react'

import { Avatar, Breadcrumb, Button, Icon } from 'components/atoms'

import * as S from './styles'

type Props = {
  breadcrumbProps?: ComponentProps<typeof Breadcrumb>
  avatarProps?: ComponentProps<typeof Avatar>
  children?: ReactNode
}

const Default = ({ breadcrumbProps, avatarProps, children }: Props) => (
  <S.Container>
    <S.Header>
      <S.LeftSide>
        {breadcrumbProps && <Breadcrumb {...breadcrumbProps} />}
      </S.LeftSide>
      <S.RightSide>
        <Button>
          <Icon name="notification" />
        </Button>
        {avatarProps && <Avatar {...avatarProps} />}
      </S.RightSide>
    </S.Header>
    <S.Main>{children}</S.Main>
  </S.Container>
)

export default Default
