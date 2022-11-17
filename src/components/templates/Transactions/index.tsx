import * as S from './styles'

import { Grid, Icon } from 'components/atoms'
import { ExpandableInput, Kpi, Select } from 'components/molecules'
import { Header } from 'components/organisms'

import { Props } from './types'

import { IconLiterals } from 'types/icons'

import { v4 as uuid } from 'uuid'

const kpisMock = [
  {
    name: 'R$ 1290,20',
    description: 'Seu saldo atual',
    iconName: 'wallet'
  },
  {
    name: 'R$ 2080,63',
    description: 'Seu ganhos',
    iconName: 'stock-up'
  },
  {
    name: 'R$ 790,43',
    description: 'Suas despesas',
    iconName: 'stock-down'
  }
]

const KPIs = () => (
  <>
    {kpisMock.map(({ iconName, ...kpiProps }) => (
      <Kpi
        headerChildren={<Icon name={iconName as IconLiterals} />}
        key={uuid()}
        {...kpiProps}
      />
    ))}
  </>
)

const Transactions = ({ headerProps }: Props) => (
  <S.Container>
    <Header {...headerProps} />
    <S.Main>
      <Grid columns="repeat(3, 290px)" gap={8}>
        <KPIs />
      </Grid>
      <S.ToolbarContainer>
        <div style={{ width: '148px' }}>
          <Select
            defaultValue="all"
            options={[
              { value: 'all', label: 'Todas' },
              { value: 'incomes', label: 'Ganhos' },
              { value: 'outcomes', label: 'Despesas' }
            ]}
          />
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <ExpandableInput placeholder="Type something..." />
          <S.NewEntryButton colorSchema="secondary">
            {/* NOTE Melhorar o jeito como esse botão é feito, sugestões: colocar os estilos como variantes do botão; colocar label como prop e passar icon dentro */}
            Nova Entrada <Icon name="plus" />
          </S.NewEntryButton>
        </div>
      </S.ToolbarContainer>
    </S.Main>
  </S.Container>
)

export default Transactions
