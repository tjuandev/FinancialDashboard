import React, { MouseEventHandler, ReactNode } from 'react'
import { CSSStyles } from 'styled-components'

export type ButtonProps = {
  children: ReactNode
  onClick?: MouseEventHandler
  padding?: string
  extraStyles?: CSSStyles
  __hover?: () => CSSStyles
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonWrapperProps = Pick<
  ButtonProps,
  '__hover' | 'padding' | 'extraStyles'
>
