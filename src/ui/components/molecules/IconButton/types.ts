import { ComponentProps } from 'react'
import { IconsNames } from 'types/icons'

export type IconButtonProps = {
  name?: IconsNames
} & ComponentProps<'button'>
