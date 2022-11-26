import React, { MouseEventHandler, ReactNode } from 'react'
import { CSSStyles } from 'styled-components'
import { buttonColorSchema } from './styles'

export type ButtonProps = {
  children: ReactNode
  onClick?: MouseEventHandler
  padding?: string
  colorSchema?: keyof typeof buttonColorSchema
  extraStyles?: CSSStyles
  __hover?: () => CSSStyles
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonWrapperProps = Pick<
  ButtonProps,
  '__hover' | 'padding' | 'extraStyles' | 'colorSchema'
>
