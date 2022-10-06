import { iconsLiterals } from './iconsLiterals'

export type IconsLiteralsInferenceType = typeof iconsLiterals

export type IconsProps = {
  name: keyof IconsLiteralsInferenceType
  color?: string
  width?: string | number
  height?: string | number
}

export type IconProps = Omit<IconsProps, 'name'>
