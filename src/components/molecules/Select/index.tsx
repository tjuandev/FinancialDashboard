import dynamic from 'next/dynamic'
import { Props, Theme } from 'react-select'
import theme from 'theme'

import {
  DropdownIndicator,
  Control,
  Input,
  SingleValue,
  Menu,
  MenuList
} from './CustomComponents'

const Select = dynamic(() => import('react-select'), {
  ssr: false
})

const newSelectorTheme = (defaultTheme: Theme) => ({
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    neutral50: theme.colors.placeholder,
    neutral80: theme.colors.primary,
    primary25: theme.colors.tertiary,
    primary50: theme.colors['primary-light'],
    primary: theme.colors.primary
  }
})

const BaseSelect = ({ isSearchable = false, components, ...props }: Props) => (
  <Select
    menuIsOpen={true}
    isSearchable={isSearchable}
    components={{
      DropdownIndicator,
      Control,
      Input,
      SingleValue,
      Menu,
      MenuList,
      ...components
    }}
    theme={newSelectorTheme}
    {...props}
  />
)

export default BaseSelect
