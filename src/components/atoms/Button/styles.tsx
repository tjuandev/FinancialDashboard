import styled from 'styled-components'
import theme from 'theme'

type ContainerProps = {
  padding?: string
}

export const Container = styled.button<ContainerProps>`
  padding: ${({ padding }) => (padding ? padding : theme.spacing['2'])};
  border-radius: ${theme.borderRadius.base};

  background: ${theme.colors.secondary};

  font-size: 1rem;
  font-weight: ${theme.typography.fontWeights.semibold};
`
