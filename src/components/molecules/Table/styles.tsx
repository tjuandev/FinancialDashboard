import styled from 'styled-components'
import theme from 'theme'
import { ColumnProps } from './types'

export const Table = styled.table`
  width: 100%;

  border-collapse: collapse;

  thead {
    background: ${theme.colors.primary};
    border-radius: ${theme.borderRadius.small};
  }

  tbody {
    background: ${theme.colors.secondary};
  }

  th,
  td {
    font-size: 14px;
  }

  td {
    padding: 0 16px;
  }

  td:first-child {
    border-radius: 0 0 0 16px;
  }

  td:last-child {
    border-radius: 0 0 16px 0;
  }
`
export const Column = styled.th<ColumnProps>`
  width: ${({ width }) => width};

  color: ${theme.colors.tertiary};
  padding: 10px 16px;
  text-align: left;

  :first-child {
    border-radius: 16px 0 0 0;
  }
  :last-child {
    border-radius: 0 16px 0 0;
  }
`
