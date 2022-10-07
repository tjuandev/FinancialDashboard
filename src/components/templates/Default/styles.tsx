import styled from 'styled-components'
import theme from 'theme'

export const Container = styled.div`
  padding: 0 80px;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  padding: 24px 0;
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
