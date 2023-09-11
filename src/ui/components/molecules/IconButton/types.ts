import { ComponentProps } from 'react'
import { IconsNames } from 'ui/components/atoms/Icon/types'

export type IconButtonProps = {
  name?: IconsNames
} & ComponentProps<'button'>
