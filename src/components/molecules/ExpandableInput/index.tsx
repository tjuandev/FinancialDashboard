import { useRef, useState } from 'react'

import { Button as BaseButton, Icon } from 'components/atoms'

import * as S from './styles'
import { ExpandableInputProps } from './types'
import { useClickOutside } from 'hooks'

const Button = () => {
  return (
    <S.ButtonWrapper>
      <BaseButton width="44px" height="100%" __hover={() => ({})}>
        <Icon name="search" />
      </BaseButton>
    </S.ButtonWrapper>
  )
}

const ExpandableIconButton = ({ onOpen, size }: ExpandableInputProps) => {
  const [open, setOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const openClassName = open ? 'open' : ''
  const isExpanded = open ? 'true' : 'false'

  const handleOpen = () => {
    if (onOpen) onOpen()
    setOpen(true)

    inputRef?.current?.focus()
  }

  const handleClose = () => setOpen(false)
  const wrapperRef = useClickOutside<HTMLDivElement>({ onClick: handleClose })

  return (
    <S.Wrapper
      ref={wrapperRef}
      className={openClassName}
      onClick={handleOpen}
      aria-expanded={isExpanded}
      size={size}
    >
      <Button />
      <S.Input
        className={openClassName}
        type="text"
        placeholder="Search..."
        ref={inputRef}
      />
    </S.Wrapper>
  )
}

export default ExpandableIconButton
