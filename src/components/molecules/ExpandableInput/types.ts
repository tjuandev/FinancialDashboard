import { IconsLiteralsOptions } from 'components/atoms/Icon/types'

export type ExpandableInputProps = {
  onOpen?: () => void
  size?: 'md'
  placeholder: string
  iconName?: IconsLiteralsOptions
}

export type WrapperProps = Pick<ExpandableInputProps, 'size'>

export type ButtonProps = {
  iconName?: IconsLiteralsOptions
  onClick: () => void
}
