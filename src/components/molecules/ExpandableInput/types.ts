import { IconsLiteralsOptions } from 'components/atoms/Icon/types'

export type ExpandableInputProps = {
  onOpen?: () => void
  size?: 'md'
  placeholder: string
  iconName?: IconsLiteralsOptions
  expandedWidth?: string
}

export type ContainerProps = Pick<
  ExpandableInputProps,
  'size' | 'expandedWidth'
>

export type ButtonProps = {
  iconName?: IconsLiteralsOptions
  onClick: () => void
}
