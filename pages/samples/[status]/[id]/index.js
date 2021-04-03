import Head from "next/head";
import { useRouter } from 'next/router'
import {useTranslation} from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import useSWR from 'swr'
import Layout from "@/layout/default";
import Main from '@/main/sample'
import Spinner from "@/utility/preloader/spinner";

const fetcher = (url) => fetch(url).then((res) => res.json());

function Sample({primaryData}) {
    const { query } = useRouter()
    const {t} = useTranslation('samples');
    const { data, error } = useSWR(() => (primaryData.user && query) && `/api/users/${primaryData.user}/samples/${query.status}/${query.id}`, fetcher);
    if (error) return <p>something's wrong ...</p>
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
                      initialData={data.sample}
                      specialties={data.specialties}
                      status={data.status}
                />
            </Layout>
        </>
    )
}

export const getServerSideProps = async ({locale}) => {
    const primaryData = {
        user: process.env.USER
    }
    return{
        props: {
            ...await serverSideTranslations(locale, ['common','samples']),
            primaryData
        },
    }
}
export default Sample