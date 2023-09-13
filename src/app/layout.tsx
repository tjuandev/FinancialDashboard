'use client'
import Providers from 'providers'
import { ReactNode } from 'react'
import GlobalStyle from 'ui/styles/global'

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="pt-BR">
      <head>
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width"
          name="viewport"
        />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="Project frontend with nextjs" name="description" />
        <meta content="boilerplate, nextjs, reactjs, react" name="keywords" />
        <meta content="#fff" name="theme-color" />
        <link href="/favicon.png" rel="icon" type="image/png" />
        <link href="/favicon.png" rel="apple-touch-icon" />
      </head>

      <body>
        <GlobalStyle />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

export default RootLayout
