import * as S from './styles'

import { Grid, Icon } from 'ui/components/atoms'
import { ExpandableInput, Kpi, Select, Table } from 'ui/components/molecules'
import { Header } from 'ui/components/organisms'

import { Props } from './types'

import { IconsNames } from 'types/icons'

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
  <Grid columns="repeat(3, 290px)" gap={8}>
    {kpisMock.map(({ iconName, ...kpiProps }) => (
      <Kpi
        headerChildren={<Icon name={iconName as IconsNames} />}
        key={uuid()}
        {...kpiProps}
      />
    ))}
  </Grid>
)

const TransactionsSelector = () => (
  <S.TransactionsSelectorWrapper>
    <Select
      defaultValue={{ value: 'all', label: 'Todas' }}
      options={[
        { value: 'all', label: 'Todas' },
        { value: 'incomes', label: 'Ganhos' },
        { value: 'outcomes', label: 'Despesas' }
      ]}
    />
  </S.TransactionsSelectorWrapper>
)

const Toolbar = () => (
  <S.ToolbarContainer>
    <TransactionsSelector />
    <S.ToolbarLeftSide>
      <ExpandableInput placeholder="Type something..." />
      <S.NewEntryButton colorSchema="secondary">
        Nova Entrada <Icon name="plus" />
      </S.NewEntryButton>
    </S.ToolbarLeftSide>
  </S.ToolbarContainer>
)

const Transactions = <TableType,>({
  headerProps,
  tableProps
}: Props<TableType>) => (
  <S.Container>
    <Header {...headerProps} />
    <S.Main>
      <KPIs />
      <Toolbar />
      <Table<TableType> {...tableProps} />
    </S.Main>
  </S.Container>
)

export default Transactions
