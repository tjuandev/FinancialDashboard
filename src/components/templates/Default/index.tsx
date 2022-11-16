import * as S from './styles'
import { Header } from 'components/organisms'
import { Props } from './types'

const Default = ({ headerProps, children }: Props) => (
  <S.Container>
    <Header {...headerProps} />
    <S.Main>{children}</S.Main>
  </S.Container>
)

export default Default
