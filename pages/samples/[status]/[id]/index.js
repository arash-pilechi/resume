import Head from "next/head";
import {useTranslation} from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Layout from "@/layout/default";
import Main from '@/main/sample'

function Sample({initialData}) {
    const {t} = useTranslation('samples');
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
                      initialData={initialData.sample}
                      specialties={initialData.specialties}
                      status={initialData.status}
                />
            </Layout>
        </>
    )
}

export const getServerSideProps = async (context) => {
    const {params: {status, id},locale} = context;
    const res = await fetch(`${process.env.HOST}/api/users/${process.env.USER}/samples/${status}/${id}`);
    const initialData = await res.json();
    return{
        props: {
            ...await serverSideTranslations(locale, ['common','samples']),
            initialData
        },
    }
}
export default Sample