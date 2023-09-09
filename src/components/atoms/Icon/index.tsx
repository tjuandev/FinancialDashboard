import { cloneElement } from 'react'

import { iconsLiterals } from './iconsLiterals'
import { IconsProps } from './types'

const Icon = ({ name, ...props }: IconsProps) => {
  if (name in iconsLiterals) {
    return cloneElement(iconsLiterals[name], {
      ...props
    })
  }

  throw Error(
    `Icon name: "${name}" do not exists in icons object literals, please insert a valid name`
  )
}

export default Icon
