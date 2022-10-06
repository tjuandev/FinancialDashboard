import { MouseEventHandler, ReactNode, CSSProperties } from 'react'
import * as S from './styles'

type Props = {
  children: ReactNode
  onClick?: MouseEventHandler
  padding?: string
  width?: string
  height?: string
  buttonStyles?: CSSProperties
}

const Button = ({
  children,
  onClick,
  padding,
  height = '40px',
  width = '40px',
  buttonStyles
}: Props) => (
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
