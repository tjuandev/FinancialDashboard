import * as S from './styles'
import { ButtonProps } from './types'

const Button = ({
  children,
  onClick,
  padding,
  height = '40px',
  width = '40px',
  buttonStyles
}: ButtonProps) => (
  <S.Container
    height={height}
    width={width}
    onClick={onClick}
    padding={padding}
    style={buttonStyles}
  >
    {children}
  </S.Container>
)

export default Button
