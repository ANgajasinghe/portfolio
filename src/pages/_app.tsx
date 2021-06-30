import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import Layout from "@ui/layout/layout";
import Head from "next/head";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = createMuiTheme({
    overrides: {
      MuiAppBar: {
        colorDefault: {
          backgroundColor: "#20202A",
        },
      },
    },
    palette: {
      type: "dark",
      background: { default: "#20202A", paper: "#20202A" },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Head>
          <title>Next Events</title>
          <meta name="description" content="NextJS Events" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
          ></link>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
export default MyApp;
