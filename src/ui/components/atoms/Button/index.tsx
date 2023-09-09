import * as S from './styles'
import { ButtonProps } from './types'

const Button = ({
  children,
  onClick,
  padding,
  __hover,
  extraStyles,
  ...buttonProps
}: ButtonProps) => (
  <S.Container
    type="button"
    onClick={onClick}
    padding={padding}
    extraStyles={extraStyles}
    __hover={__hover}
    {...buttonProps}
  >
    {children}
  </S.Container>
)

export default Button
