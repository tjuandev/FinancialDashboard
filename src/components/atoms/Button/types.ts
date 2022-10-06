import { CSSProperties, MouseEventHandler, ReactNode } from 'react'

export type ButtonProps = {
  children: ReactNode
  onClick?: MouseEventHandler
  padding?: string
  width?: string
  height?: string
  buttonStyles?: CSSProperties
}
