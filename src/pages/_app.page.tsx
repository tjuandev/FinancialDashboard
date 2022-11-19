import { AppProps } from 'next/app'
import Head from 'next/head'
import Providers from 'providers'
import GlobalStyle from 'styles/global'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />

        <meta
          name="description"
          content="A simple project starter to Typescript, React, NextJS and Styled Components"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
      <GlobalStyle />
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </>
  )
}

export default App
