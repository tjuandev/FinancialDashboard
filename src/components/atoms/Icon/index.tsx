import { cloneElement } from 'react'

import { iconsLiterals } from './iconsLiterals'
import { IconsLiteralsOptions, IconsProps } from './types'

const Icon = ({ name, ...props }: IconsProps) => {
  if (name in iconsLiterals) {
    return cloneElement(iconsLiterals[name as IconsLiteralsOptions], {
      ...props
    })
  }

  throw Error(
    `Icon ${name} do not exists in icons object literals, please insert a valid name`
  )
}

export default Icon
