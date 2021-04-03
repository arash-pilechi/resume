import Head from "next/head";
import {useTranslation} from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import useSWR from 'swr'
import Layout from "@/layout/default";
import Main from '@/main/home'
import Spinner from '@/utility/preloader/spinner'

const fetcher = (url) => fetch(url).then((res) => res.json());

function Home({primaryData}) {
    const {t} = useTranslation('home');
    const { initialData, error } = useSWR(() => primaryData.user && `/api/users/${primaryData.user}/home`, fetcher);
    if (error) return <p>something's wrong ...</p>
    if (!initialData) return <Spinner />
    return (
        <>
            <Head>
                <title>{t(`${initialData.currentUser}.seo.title`)}</title>
                <meta name="description" content={t(`${initialData.currentUser}.seo.description`)} />
                <meta name="keywords" content={t(`${initialData.currentUser}.seo.keywords`)} />
            </Head>
            <Layout socialMedia={initialData.socialMedia}
                    contactInfo={initialData.contactInfo}>
                <Main currentUser={initialData.currentUser}
                      specialties={initialData.specialties}/>
            </Layout>
        </>
    )
}

export const getStaticProps = async ({ locale }) => {
    const primaryData = {
        user: process.env.USER
    }
    return{
        props: {
            ...await serverSideTranslations(locale, ['common','home']),
            primaryData
        },
    }
}
export default Home