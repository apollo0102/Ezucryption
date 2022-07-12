import React, { ReactNode } from "react";
import Head from "next/head";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../theme";
import createEmotionCache from "../createEmotionCache";
import HeadFavIcon from "../components/Partials/HeadFavIcon/HeadFavIcon";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../store/store";
import { ToastContainer } from "react-toastify";
// import { Toaster } from "react-hot-toast";

import "../assets/css/ReactToastify.css";
import "../assets/css/globals.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

type Props = MyAppProps & {
  Component: Page;
};

export default function MyApp(props: Props) {
  const toastProps = {
    autoClose: 3000,
    enableMultiContainer: true,
    closeButton: false,
    hideProgressBar: true,
    style: { marginTop: "3.125em", minWidth: "36.625em", right: "0em" },
    className: "custom-toast-container",
  };

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page: ReactNode) => page);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CacheProvider value={emotionCache}>
          <Head>
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
          </Head>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <HeadFavIcon />
            <ToastContainer
              containerId="success"
              toastClassName="custom-toast-message success-message"
              {...toastProps}
            />
            <ToastContainer
              containerId="error"
              toastClassName={"custom-toast-message error-message"}
              {...toastProps}
            />
            {/* <Toaster /> */}
            {getLayout(<Component {...pageProps} />)}
          </ThemeProvider>
        </CacheProvider>
      </PersistGate>
    </Provider>
  );
}
