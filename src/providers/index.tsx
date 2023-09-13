import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from 'ui/chakra-theme'

const client = new QueryClient()

const Providers = ({ children }: { children: ReactNode }) => (
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={client}>
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </QueryClientProvider>
  </ChakraProvider>
)

export default Providers
