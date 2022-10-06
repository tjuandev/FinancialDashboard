import { cloneElement } from 'react'

import { iconsLiterals } from './iconsLiterals'
import { IconsProps } from './types'

const Icon = ({ name, ...props }: IconsProps) =>
  cloneElement(iconsLiterals[name], { ...props })

export default Icon
