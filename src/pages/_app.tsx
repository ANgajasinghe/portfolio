import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import PropTypes from "prop-types";
import type { AppProps } from "next/app";
import React from "react";
import Layout from "@ui/layout/layout";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "../@ui/theme";

export default function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");

    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Akalanka Nayanajith</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
