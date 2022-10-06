import styled from 'styled-components'

import { onHoverInvertButtonColors } from 'styles/mixins'
import theme from 'theme'

type ContainerProps = {
  padding?: string
  width: string
  height: string
}

export const Container = styled.button<ContainerProps>`
  padding: ${({ padding }) => (padding ? padding : theme.spacing['2'])};
  border-radius: ${theme.borderRadius.base};

  height: ${({ height }) => height};
  width: ${({ width }) => width};

  font-size: 1rem;
  font-weight: ${theme.typography.fontWeights.semibold};

  transition: ${theme.transitions.base};
  cursor: pointer;

  ${onHoverInvertButtonColors(theme.colors.secondary, theme.colors.primary)}
`
