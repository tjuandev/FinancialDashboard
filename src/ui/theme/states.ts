import { css } from 'styled-components'
import colors from './colors'
import { transitions } from './animation'

export const focus = css`
  outline: 4px solid ${colors.focus};
  outline-offset: 2px;
`

export const darkOnHover = css`
  :hover {
    transition: ${transitions.base};
    transition-property: filter;

    &:hover {
      filter: brightness(0.8);
    }
  }
`
