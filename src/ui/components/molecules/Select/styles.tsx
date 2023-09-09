import { components } from 'react-select'
import styled from 'styled-components'
import theme from 'ui/theme'

export const SelectControlWrapper = styled.div`
  > div {
    border: none;

    background: ${theme.colors.secondary};
    border-radius: ${theme.borderRadius.base};

    display: flex;
    padding: ${theme.spacing['2']} ${theme.spacing[4]};

    cursor: pointer;
  }

  > div > div {
    padding: 0;
  }
`

export const SingleValueWrapper = styled.div`
  grid-area: 1/1/2/3;

  padding-right: 0.5rem;

  > div {
    font-weight: ${theme.typography.fontWeights.semibold} !important;

    margin: 0;
  }
`

export const InputWrapper = styled.div`
  grid-area: 1/1/2/3;

  > div {
    padding: 0;
    margin: 0;
  }
`

export const MenuWrapper = styled.div`
  > div {
    box-shadow: none;
    background: ${theme.colors.secondary};
    border-radius: ${theme.borderRadius.base};

    padding: 0;
  }
`

export const MenuListWrapper = styled.div`
  > div {
    padding: 0;
    border-radius: ${theme.borderRadius.base};
  }

  > div > div {
    padding: ${theme.spacing['2']} ${theme.spacing[4]};
  }
`
export const Placeholder = styled(components.Placeholder)`
  padding-right: 0.5rem;
`
