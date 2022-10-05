import { MouseEventHandler } from 'react'
import * as S from './styles'

type Props = {
  children: React.ReactNode
  onClick?: MouseEventHandler
}

const Button = ({ children, onClick }: Props) => (
  <S.Container onClick={onClick}>{children}</S.Container>
)

export default Button
