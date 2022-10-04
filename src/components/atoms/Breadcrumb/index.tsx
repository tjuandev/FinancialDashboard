import { ReactNode } from 'react'
import * as S from './styles'

type Props = {
  name: string
  icon?: ReactNode
}

const Breadcrumb = ({ name, icon }: Props) => (
  <S.Container>
    <S.IconWrapper>{icon}</S.IconWrapper>
    <h1>{name}</h1>
  </S.Container>
)

export default Breadcrumb
