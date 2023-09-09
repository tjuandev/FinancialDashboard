import styled, { css } from 'styled-components'

import theme from 'ui/theme'
import { ButtonWrapperProps } from './types'

export const buttonColorSchema = {
  primary: css`
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.primary};
  `,
  secondary: css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.secondary};
  `
}

export const Container = styled.button<ButtonWrapperProps>`
  height: 44px;
  width: 44px;

  ${({ colorSchema = 'primary' }) => buttonColorSchema[colorSchema]}

  padding: ${({ padding }) => (padding ? padding : theme.spacing['2'])};

  border-radius: ${theme.borderRadius.base};

  font-size: 1rem;
  font-weight: ${theme.typography.fontWeights.semibold};

  cursor: pointer;

  :hover {
    ${theme.states.darkOnHover}
  }

  :focus {
    ${theme.states.focus}
  }
  ${({ __hover }) => __hover && __hover}
  ${({ extraStyles }) => extraStyles}
`
