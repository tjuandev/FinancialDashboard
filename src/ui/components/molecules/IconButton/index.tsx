import { Button, Icon } from 'ui/components/atoms'
import * as S from './styles'
import { IconButtonProps } from './types'

const IconButton = ({ name = 'search', ...buttonProps }: IconButtonProps) => {
  return (
    <S.ButtonWrapper>
      <Button {...buttonProps}>
        <Icon name={name} />
      </Button>
    </S.ButtonWrapper>
  )
}

export default IconButton
