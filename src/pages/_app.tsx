import "bootstrap/dist/css/bootstrap.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import "../styles/globals.scss";
import PropTypes from "prop-types";
import type {AppProps} from "next/app";
import React from "react";
import Layout from "@ui/layout/layout";
import Head from "next/head";
import {ThemeProvider} from "@material-ui/core";
import {theme} from "../@ui/theme";
import NProgress from "nprogress";
import Router from "next/router";
import "../styles/nprogress.css";
import {AnimatePresence} from "framer-motion";

NProgress.configure({
    minimum: 0.3,
    easing: "ease",
    speed: 800,
    showSpinner: false,
});

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function MyApp({Component, pageProps}: AppProps) {
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
                    <AnimatePresence
                        exitBeforeEnter
                        initial={false}
                        onExitComplete={() => window.scrollTo(0, 0)}
                    >
                        <Component {...pageProps} />
                    </AnimatePresence>
                </Layout>
            </ThemeProvider>
        </React.Fragment>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};
