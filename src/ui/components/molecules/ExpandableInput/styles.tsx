import styled, { css } from 'styled-components'
import theme from 'ui/theme'
import { ContainerProps } from './types'

const sizes = {
  md: css`
    height: 44px;
    width: 44px;
  `
}

export const Container = styled.div<ContainerProps>`
  ${({ size = 'md' }) => sizes[size]}

  display: flex;
  align-items: center;

  position: relative;

  background: ${theme.colors.secondary};
  border-radius: ${theme.borderRadius.base};

  transition: ${theme.transitions.base};
  cursor: pointer;

  &.open {
    width: ${({ expandedWidth }) => expandedWidth};
  }

  :not(.open):hover {
    filter: brightness(0.8);
  }

  cursor: pointer;

  :focus-within {
    ${theme.states.focus}
  }
`

export const Input = styled.input`
  position: relative;
  margin: 0 16px 0 40px;
  background: transparent;
  border: 0;

  font-size: ${theme.typography.sizes.md};

  :focus {
    outline: 0;
  }

  transition: ${theme.transitions.base};

  opacity: 0;
  width: 0;

  &.open {
    opacity: 1;
    width: 100%;
  }
`
