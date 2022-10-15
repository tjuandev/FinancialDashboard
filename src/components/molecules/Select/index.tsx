import * as S from './styles'
import { Icon } from 'components/atoms'
import dynamic from 'next/dynamic'
import {
  ControlProps,
  components,
  InputProps,
  SingleValueProps
} from 'react-select'

const Select = dynamic(() => import('react-select'), {
  ssr: false
})

const SingleValue = (props: SingleValueProps) => (
  <S.SingleValueWrapper>
    <components.SingleValue {...props} />
  </S.SingleValueWrapper>
)

const Input = (props: InputProps) => (
  <S.InputWrapper>
    <components.Input {...props} />
  </S.InputWrapper>
)

const Control = (props: ControlProps) => (
  <S.SelectControlWrapper>
    <components.Control {...props} />
  </S.SelectControlWrapper>
)

const DropdownIndicator = () => <Icon name="chevron-down" />

const BaseSelect = () => (
  <Select
    components={{
      DropdownIndicator,
      Control,
      Input,
      SingleValue
    }}
  />
)

export default BaseSelect
