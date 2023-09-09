import * as S from './styles'
import { BreadcrumbProps } from './types'

const Breadcrumb = ({ name, icon }: BreadcrumbProps) => (
  <S.Container>
    <S.IconWrapper>{icon}</S.IconWrapper>
    <h1>{name}</h1>
  </S.Container>
)

export default Breadcrumb
