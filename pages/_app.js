import Head from "next/head";
import Router from 'next/router';
import { appWithTranslation } from 'next-i18next'
import NProgress from 'nprogress';
import MainContextProvider from "@/context/main/provider";
import 'swiper/swiper.scss';
import '@/styles/global/index.scss';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
    return (
        <MainContextProvider>
            <Head>
                <meta charSet='utf-8'/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="theme-color" content="#00222a"/>
                <meta name='viewport' content='initial-scale=1.0, width=device-width, user-scalable=no'/>
                <link rel="icon" href="/images/icon/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </MainContextProvider>
    )
}

export default appWithTranslation(MyApp)
