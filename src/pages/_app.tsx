import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Global, css } from "@emotion/react";
import { ChakraProvider } from "@chakra-ui/react";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import axios from "axios";
import { apiEndpoint } from "@/utils";

const GlobalStyles = css`
  body {
    margin: 0;
    font-family: Pretendard Variable;
  }

  #__next {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #f4f4f4;
  }

  div[style] {
    flex: 1;
    overflow-y: auto;
  }
`;

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({
  Component: Page,
  pageProps,
}: AppPropsWithLayout) {
  const getLayout = Page.getLayout ?? ((page) => page);

  return (
    <ChakraProvider>
      {getLayout(<Page {...pageProps} />)}
      <Global styles={GlobalStyles} />
    </ChakraProvider>
  );
}

axios.defaults.baseURL = apiEndpoint;
