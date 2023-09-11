import styled from 'styled-components'
import theme from 'ui/theme'

export const Container = styled.div`
  display: flex;
  align-items: center;

  gap: ${theme.spacing[2]};
`

export const InfoContainer = styled.div`
  text-align: right;

  p {
    font-weight: ${theme.typography.fontWeights.semibold};
    font-size: ${theme.typography.sizes.sm};
    line-height: 12px;
  }

  small {
    font-size: ${theme.typography.sizes.xs};
  }
`

export const ImageContainer = styled.div`
  width: 48px;
  height: 48px;
  position: relative;

  &,
  img {
    border-radius: ${theme.borderRadius.base};
  }
`

export const AvatarPlaceholder = styled.div`
  width: 100%;
  height: 100%;

  border-radius: inherit;
  background: ${theme.colors.secondary};

  font-weight: bolder;
  font-size: ${theme.typography.sizes.xl};

  display: flex;
  align-items: center;
  justify-content: center;
`
