import { Icon } from 'components/atoms'
import * as S from './styles'
import { KpiProps } from './types'

const Kpi = ({ iconName, name, description }: KpiProps) => (
  <S.Container>
    <S.IconWrapper>
      {iconName && <Icon name={iconName} height="100%" width="100%" />}
    </S.IconWrapper>
    <h2>{name}</h2>
    <p>{description}</p>
  </S.Container>
)

export default Kpi
