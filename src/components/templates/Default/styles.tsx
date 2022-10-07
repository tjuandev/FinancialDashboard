import styled from 'styled-components'
import theme from 'theme'

export const Container = styled.div``

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  padding: 24px 80px;
`

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[8]};
`

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[8]};
`

export const Main = styled.main``
