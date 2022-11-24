import { CSSProperties } from 'react'
import theme from 'theme'

export type SpinnerProps = {
  size?: keyof typeof theme.typography.sizes
  color?: string
  bgColor?: string
  animation?: Pick<CSSProperties, 'animation'>
}
