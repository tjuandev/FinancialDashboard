import { IconsNames } from 'ui/components/atoms/Icon/types'

export type ExpandableInputProps = {
  placeholder: string
  expandedWidth?: string
  iconName?: IconsNames
  onOpen?: () => void
  size?: 'md'
}

export type ContainerProps = Pick<
  ExpandableInputProps,
  'size' | 'expandedWidth'
>
