import { SVGProps } from 'react'
import { iconsLiterals } from './iconsLiterals'

type IconsLiteralsInferenceType = typeof iconsLiterals
export type IconsNames = keyof IconsLiteralsInferenceType

export type IconsProps = {
  name: IconsNames
  color?: string
  height?: string | number
  width?: string | number
}

export type IconProps = Omit<IconsProps, 'name'> & SVGProps<SVGSVGElement>
