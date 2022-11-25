import * as S from './styles'

import { Grid, Icon } from 'components/atoms'
import { ExpandableInput, Kpi, Select, Table } from 'components/molecules'
import { Header } from 'components/organisms'

import { Props, TableProps } from './types'

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
  <Grid columns="repeat(3, 290px)" gap={8}>
    {kpisMock.map(({ iconName, ...kpiProps }) => (
      <Kpi
        headerChildren={<Icon name={iconName as IconLiterals} />}
        key={uuid()}
        {...kpiProps}
      />
    ))}
  </Grid>
)

const TransactionsSelector = () => (
  <S.TransactionsSelectorWrapper>
    <Select
      defaultValue="all"
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

const TransactionsTable = <TableType,>(props: TableProps<TableType>) => {
  const { columns, rows } = props
  const shouldLoad = !columns && !rows

  return <Table loading={shouldLoad} {...props} />
}

const Transactions = <TableType,>({
  headerProps,
  tableProps
}: Props<TableType>) => (
  <S.Container>
    <Header {...headerProps} />
    <S.Main>
      <KPIs />
      <Toolbar />
      <TransactionsTable {...tableProps} />
    </S.Main>
  </S.Container>
)

export default Transactions
