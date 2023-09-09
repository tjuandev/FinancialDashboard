import { Button } from 'ui/components/atoms'
import styled from 'styled-components'
import theme from 'ui/theme'

export const Container = styled.div`
  padding: 0 ${theme.spacing[20]};
`

export const TransactionsSelectorWrapper = styled.div`
  width: 148px;
`

export const ToolbarContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 64px;
  margin-bottom: 24px;

  width: 1143px;
`

export const ToolbarLeftSide = styled.div`
  display: flex;
  gap: 1rem;
`

export const ColumnActionsContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 0.25rem;

  margin: 0.25rem 0;
`

export const NewEntryButton = styled(Button)`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 12px 16px;

  :hover {
    filter: brightness(0.9);
  }
`

export const Main = styled.main``
