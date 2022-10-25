export type ExpandableInputProps = {
  onOpen?: () => void
  size?: 'md'
}

export type WrapperProps = Pick<ExpandableInputProps, 'size'>
