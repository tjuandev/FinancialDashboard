import { defineStyleConfig } from '@chakra-ui/react'
import { colors } from './colors'

export const Button = defineStyleConfig({
  baseStyle: {
    transition: 'all 0.2s ease-in-out',
    _hover: {
      filter: 'brightness(0.9)'
    },
    borderRadius: 'hxl',
    _focus: {
      outline: `4px solid ${colors.focus}`,
      outlineOffset: '2px'
    }
  },
  variants: {
    primary: {
      backgroundColor: 'secondary',
      color: 'primary'
    },
    secondary: {
      backgroundColor: 'primary',
      color: 'secondary'
    }
  }
})
