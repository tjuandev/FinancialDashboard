import { iconsLiterals } from './iconsLiterals'

type IconsLiteralsInferenceType = typeof iconsLiterals
export type IconsLiteralsOptions = keyof IconsLiteralsInferenceType

export type IconsProps = {
  name: IconsLiteralsOptions
  color?: string
  width?: string | number
  height?: string | number
}

export type IconProps = Omit<IconsProps, 'name'>
