import styled from 'styled-components'
import theme from 'ui/theme'

export const Container = styled.div`
  padding: 0 ${theme.spacing[20]};
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  padding-top: ${theme.spacing[6]};

  margin-bottom: ${theme.spacing[16]};
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
