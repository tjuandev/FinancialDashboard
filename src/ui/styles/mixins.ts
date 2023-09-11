import { css } from 'styled-components'

export const onHoverInvertButtonColors = (
  bgColor: string,
  color: string
) => css`
  background: ${bgColor};
  color: ${color};

  :hover {
    background: ${color};
    color: ${bgColor};
  }
`
