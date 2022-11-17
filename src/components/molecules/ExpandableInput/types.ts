import { IconLiterals } from 'types/icons'

export type ExpandableInputProps = {
  onOpen?: () => void
  size?: 'md'
  placeholder: string
  iconName?: IconLiterals
  expandedWidth?: string
}

export type ContainerProps = Pick<
  ExpandableInputProps,
  'size' | 'expandedWidth'
>

export type ButtonProps = {
  iconName?: IconLiterals
  onClick: () => void
}
