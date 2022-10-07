import { Icon } from 'components/atoms'
import * as S from './styles'
import { KpiProps } from './types'

const Kpi = ({ iconName, name, description }: KpiProps) => (
  <S.Container>
    {iconName && <Icon name={iconName} />}
    <h3>{name}</h3>
    <p>{description}</p>
  </S.Container>
)

export default Kpi
