import dynamic from 'next/dynamic'
import { Props } from 'react-select'
import theme from 'theme'

import {
  DropdownIndicator,
  Control,
  Input,
  SingleValue
} from './CustomComponents'

const Select = dynamic(() => import('react-select'), {
  ssr: false
})

const BaseSelect = ({ isSearchable = false, ...props }: Props) => (
  <Select
    menuIsOpen={true}
    isSearchable={isSearchable}
    components={{
      DropdownIndicator,
      Control,
      Input,
      SingleValue
    }}
    theme={(defaultTheme) => ({
      ...defaultTheme,
      colors: {
        ...defaultTheme.colors,
        neutral50: theme.colors.placeholder
      }
    })}
    {...props}
  />
)

export default BaseSelect
