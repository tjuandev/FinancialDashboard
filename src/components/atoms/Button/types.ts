import { CSSProperties, MouseEventHandler, ReactNode } from 'react'
import { CSSObject } from 'styled-components'

export type ButtonProps = {
  children: ReactNode
  onClick?: MouseEventHandler
  padding?: string
  width?: string
  height?: string
  buttonStyles?: CSSProperties
  __hover?: () => CSSObject
}

export type ButtonWrapperProps = Pick<
  ButtonProps,
  '__hover' | 'height' | 'padding' | 'width'
>
