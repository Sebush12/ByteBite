import { Navbar } from "@/components/navigation/navbar";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Client, Provider, cacheExchange, fetchExchange } from "urql";
import { Footer } from "@/components/navigation/footer";

const client = new Client({
  url: "http://127.0.0.1:8000/graphql",
  exchanges: [cacheExchange, fetchExchange],
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps): JSX.Element {
  return (
    <SessionProvider session={session}>
      <Provider value={client}>
        <ChakraProvider>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </ChakraProvider>
      </Provider>
    </SessionProvider>
  );
}
