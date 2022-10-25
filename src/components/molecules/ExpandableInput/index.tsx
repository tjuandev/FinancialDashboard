import { useState } from 'react'

import { Button, Icon } from 'components/atoms'

import * as S from './styles'
import { ExpandableInputProps } from './types'

const ExpandableIconButton = ({ onOpen, size }: ExpandableInputProps) => {
  const [open, setOpen] = useState(false)

  const className = open ? 'open' : ''

  const handleOpen = () => {
    if (onOpen) onOpen()
    setOpen(true)
  }

  return (
    <S.Wrapper className={className} onClick={handleOpen} size={size}>
      <S.ButtonWrapper>
        <Button width="44px" height="100%" __hover={() => ({})}>
          <Icon name="notification" />
        </Button>
      </S.ButtonWrapper>
      <S.Input className={className} type="text" placeholder="Search..." />
    </S.Wrapper>
  )
}

export default ExpandableIconButton
