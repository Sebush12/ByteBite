import { Navbar } from "@/components/navbar/navbar";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useState } from "react";

import { Client, Provider, cacheExchange, fetchExchange } from "urql";
import { SelectedPage } from "./shared/types";

const client = new Client({
  url: "http://127.0.0.1:8000/graphql",
  exchanges: [cacheExchange, fetchExchange],
});

export default function App({ Component, pageProps }: AppProps) {
  const route = useRouter();
  const [selectedPage, setSelectedPage] = useState(SelectedPage.Home);
  return (
    <>
      <Navbar
        isTopOfPage={true}
        setSelectedPage={setSelectedPage}
        selectedPage={selectedPage}
        children={undefined}
      />
      <Provider value={client}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </Provider>
    </>
  );
}
