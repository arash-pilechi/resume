import Head from "next/head";
import {useTranslation} from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import useSWR from 'swr'
import Layout from "@/layout/default";
import Main from '@/main/specialties'
import Spinner from "@/utility/preloader/spinner";

const fetcher = (url) => fetch(url).then((res) => res.json());

function Specialties({primaryData}) {
    const {t} = useTranslation('specialties');
    const { data, error } = useSWR(() => primaryData.user && `/api/users/${primaryData.user}/specialties`, fetcher);
    if (error) return <p>somethings wrong ...</p>
    if (!data) return <Spinner />
    return (
        <>
            <Head>
                <title>{t(`${data.currentUser}.seo.title`)}</title>
                <meta name="description" content={t(`${data.currentUser}.seo.description`)} />
                <meta name="keywords" content={t(`${data.currentUser}.seo.keywords`)} />
            </Head>
            <Layout socialMedia={data.socialMedia}
                    contactInfo={data.contactInfo}>
                <Main currentUser={data.currentUser}
                      initialData={data.specialties}/>
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
            ...await serverSideTranslations(locale, ['common','specialties']),
            primaryData
        },
    }
}
export default Specialties