import styled from 'styled-components'
import theme from 'theme'

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

  th {
    color: ${theme.colors.tertiary};
    padding: 10px 16px;
    text-align: left;
  }

  th:first-child {
    border-radius: 16px 0 0 0;
  }

  th:last-child {
    border-radius: 0 16px 0 0;
  }

  td:first-child {
    border-radius: 0 0 0 16px;
  }

  td:last-child {
    border-radius: 0 0 16px 0;
  }
`
