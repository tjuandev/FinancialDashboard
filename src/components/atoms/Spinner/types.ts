import { CSSProperties } from 'react'

export type SpinnerProps = {
  size?: string
  color?: string
  bgColor?: string
  animation?: Pick<CSSProperties, 'animation'>
}
