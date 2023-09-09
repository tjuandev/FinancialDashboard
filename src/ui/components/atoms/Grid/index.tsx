import styled from 'styled-components'
import theme from 'ui/theme'
import { GridProps } from './types'

const Grid = styled.div<GridProps>`
  display: grid;

  gap: ${({ gap = 2 }) => theme.spacing[gap!]};
  grid-template-rows: ${({ rows }) => rows};
  grid-template-columns: ${({ columns }) => columns};

  width: 100%;
  height: 100%;
`

export default Grid
