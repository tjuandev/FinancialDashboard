import { IconsNames } from 'types/icons'

export type ExpandableInputProps = {
  onOpen?: () => void
  size?: 'md'
  placeholder: string
  iconName?: IconsNames
  expandedWidth?: string
}

export type ContainerProps = Pick<
  ExpandableInputProps,
  'size' | 'expandedWidth'
>
