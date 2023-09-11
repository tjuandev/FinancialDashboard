import React, { MouseEventHandler, ReactNode } from 'react'
import { CSSProp } from 'styled-components'
import { buttonColorSchema } from './styles'

export type ButtonProps = {
  children: ReactNode
  __hover?: () => CSSProp
  colorSchema?: keyof typeof buttonColorSchema
  extraStyles?: CSSProp
  onClick?: MouseEventHandler
  padding?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonWrapperProps = Pick<
  ButtonProps,
  '__hover' | 'padding' | 'extraStyles' | 'colorSchema'
>
