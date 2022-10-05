import { MouseEventHandler } from 'react'
import * as S from './styles'

type Props = {
  children: React.ReactNode
  onClick?: MouseEventHandler
  padding?: string
}

const Button = ({ children, onClick, padding }: Props) => (
  <S.Container onClick={onClick} padding={padding}>
    {children}
  </S.Container>
)

export default Button
