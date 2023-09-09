import styled from 'styled-components'
import theme from 'ui/theme'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > h1 {
    font-size: ${theme.typography.sizes['4xl']};
  }
`

export const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
`
