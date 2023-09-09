import { useRef, useState } from 'react'
import * as S from './styles'
import { ExpandableInputProps } from './types'
import IconButton from '../IconButton'

const ExpandableIconButton = ({
  onOpen,
  size,
  iconName,
  placeholder,
  expandedWidth = '300px'
}: ExpandableInputProps) => {
  const [open, setOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const openClassName = open ? 'open' : ''
  const isExpanded = open ? 'true' : 'false'

  const handleOpen = () => {
    if (onOpen) onOpen()
    setOpen(true)
  }

  const handleClose = () => setOpen(false)

  return (
    <S.Container
      className={openClassName}
      aria-expanded={isExpanded}
      size={size}
      data-testid="container-element"
      expandedWidth={expandedWidth}
    >
      <IconButton
        name={iconName}
        onClick={handleOpen}
        onFocus={() => inputRef?.current?.focus()}
      />
      <S.Input
        className={openClassName}
        type="text"
        placeholder={placeholder}
        ref={inputRef}
        onBlur={handleClose}
      />
    </S.Container>
  )
}

export default ExpandableIconButton
