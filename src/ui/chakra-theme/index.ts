import { Button } from './Button'
import { extendTheme } from '@chakra-ui/react'
import { colors } from './colors'

export const theme = extendTheme({
  colors,
  fonts: {
    heading: 'Inter',
    body: 'Inter'
  },
  radii: {
    hxl: '0.625rem'
  },
  components: {
    Button
  }
})
