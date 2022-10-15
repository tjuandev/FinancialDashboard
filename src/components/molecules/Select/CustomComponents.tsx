import * as S from './styles'

import {
  ControlProps,
  components,
  InputProps,
  SingleValueProps,
  DropdownIndicatorProps
} from 'react-select'

import { Icon } from 'components/atoms'

export const DropdownIndicator = (props: DropdownIndicatorProps) => (
  <Icon name="chevron-down" {...props} />
)

export const SingleValue = (props: SingleValueProps) => (
  <S.SingleValueWrapper>
    <components.SingleValue {...props} />
  </S.SingleValueWrapper>
)

export const Input = (props: InputProps) => (
  <S.InputWrapper>
    <components.Input {...props} />
  </S.InputWrapper>
)

export const Control = (props: ControlProps) => (
  <S.SelectControlWrapper>
    <components.Control {...props} />
  </S.SelectControlWrapper>
)
