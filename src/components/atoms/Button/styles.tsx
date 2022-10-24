import styled from 'styled-components'

import { onHoverInvertButtonColors } from 'styles/mixins'
import theme from 'theme'
import { ButtonWrapperProps } from './types'

export const Container = styled.button<ButtonWrapperProps>`
  padding: ${({ padding }) => (padding ? padding : theme.spacing['2'])};
  border-radius: ${theme.borderRadius.base};

  height: ${({ height }) => height};
  width: ${({ width }) => width};

  font-size: 1rem;
  font-weight: ${theme.typography.fontWeights.semibold};

  transition: ${theme.transitions.base};
  cursor: pointer;

  ${({ __hover }) =>
    __hover
      ? __hover()
      : onHoverInvertButtonColors(theme.colors.secondary, theme.colors.primary)}
`
