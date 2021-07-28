import nProgress from "nprogress";
import Page from "../components/Page";
import "../components/styles/nprogress.css";
import { Router } from "next/router";

Router.events.on("routeChangeStart", () => {
    nProgress.start();
});

Router.events.on("routeChangeComplete", () => {
    nProgress.done();
});

Router.events.on("routeChangeError", () => {
    nProgress.done();
});

function MyApp({ Component, pageProps }) {
    return (
        <Page>
            <Component {...pageProps} />
        </Page>
    );
}

export default MyApp;
