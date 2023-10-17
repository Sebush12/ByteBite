import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import { Client, Provider, cacheExchange, fetchExchange } from 'urql';

const client = new Client({
  url: 'http://127.0.0.1:8000/graphql',
  exchanges: [cacheExchange, fetchExchange],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <ChakraProvider>
       <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  )
}
