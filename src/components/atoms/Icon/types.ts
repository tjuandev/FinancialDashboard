import { iconsLiterals } from './iconsLiterals'

type IconsLiteralsInferenceType = typeof iconsLiterals
export type IconsNames = keyof IconsLiteralsInferenceType

export type IconsProps = {
  name: IconsNames
  color?: string
  width?: string | number
  height?: string | number
}

export type IconProps = Omit<IconsProps, 'name'>
