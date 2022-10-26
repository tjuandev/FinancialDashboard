import styled from 'styled-components'
import theme from 'theme'

export const Container = styled.div`
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing[6]};

  width: 100%;
  height: 100%;

  > h2 {
    font-size: ${theme.typography.sizes['3xl']};
    margin-bottom: 4px;
  }

  > p {
    font-size: ${theme.typography.sizes['md']};
  }

  background: ${theme.colors.secondary};
  color: ${theme.colors.primary};
`
export const Header = styled.header`
  margin-bottom: ${theme.spacing[6]};
`
