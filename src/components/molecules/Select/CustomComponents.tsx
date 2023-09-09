import * as S from './styles'

import {
  ControlProps,
  components,
  InputProps,
  SingleValueProps,
  MenuProps,
  MenuListProps,
  PlaceholderProps
} from 'react-select'

import { Icon } from 'components/atoms'

export const DropdownIndicator = () => <Icon name="chevron-down" />

export const SingleValue = (props: SingleValueProps) => (
  <S.SingleValueWrapper data-testid="SingleValue">
    <components.SingleValue {...props} />
  </S.SingleValueWrapper>
)

export const Input = (props: InputProps) => (
  <S.InputWrapper data-testid="Input">
    <components.Input {...props} />
  </S.InputWrapper>
)

export const Control = (props: ControlProps) => (
  <S.SelectControlWrapper data-testid="Control">
    <components.Control {...props} />
  </S.SelectControlWrapper>
)

export const Menu = (props: MenuProps) => (
  <S.MenuWrapper data-testid="Menu">
    <components.Menu {...props} />
  </S.MenuWrapper>
)

export const MenuList = (props: MenuListProps) => (
  <S.MenuListWrapper data-testid="MenuList">
    <components.MenuList {...props} />
  </S.MenuListWrapper>
)

export const Placeholder = (props: PlaceholderProps) => (
  <S.Placeholder data-testid="Placeholder" {...props} />
)
