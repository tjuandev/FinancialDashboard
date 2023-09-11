import * as S from './styles'
import { KpiProps } from './types'

const Kpi = ({ name, description, headerChildren }: KpiProps) => (
  <S.Container>
    <S.Header>{headerChildren}</S.Header>
    <h2>{name}</h2>
    <p>{description}</p>
  </S.Container>
)

export default Kpi
