import React, { MouseEventHandler, ReactNode } from 'react'
import { CSSObject } from 'styled-components'

export type ButtonProps = {
  children: ReactNode
  onClick?: MouseEventHandler
  padding?: string
  extraStyles?: CSSObject
  __hover?: () => CSSObject
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonWrapperProps = Pick<
  ButtonProps,
  '__hover' | 'padding' | 'extraStyles'
>
