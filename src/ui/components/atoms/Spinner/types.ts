import { CSSProperties } from 'react'

export type SpinnerProps = {
  animation?: Pick<CSSProperties, 'animation'>
  bgColor?: string
  color?: string
  size?: string
}
