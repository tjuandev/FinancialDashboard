import * as S from './styles'
import { HeaderProps } from './types'

import { Avatar, Button, Icon } from 'ui/components/atoms'
import { Breadcrumb } from 'ui/components/molecules'

const Header = ({ breadcrumbProps, avatarProps }: HeaderProps) => (
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
)

export default Header
