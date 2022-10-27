import styled from 'styled-components'

import theme from 'theme'
import { ButtonWrapperProps } from './types'

export const Container = styled.button<ButtonWrapperProps>`
  height: 44px;
  width: 44px;

  background-color: ${theme.colors.secondary};
  padding: ${({ padding }) => (padding ? padding : theme.spacing['2'])};
  border-radius: ${theme.borderRadius.base};

  font-size: 1rem;
  font-weight: ${theme.typography.fontWeights.semibold};

  transition: ${theme.transitions.base};
  cursor: pointer;

  :focus {
    outline: 1px solid ${theme.colors.primary};
  }

  ${({ __hover }) => __hover && __hover}
  ${({ extraStyles }) => extraStyles}
`
