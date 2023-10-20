import { ColorModeScript, theme } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";
import { useRouter } from "next/router";
import { useState } from "react";
import { SelectedPage } from "./shared/types";

export default function Document() {
  return (
    <>
      <Html lang="en">
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    </>
  );
}
