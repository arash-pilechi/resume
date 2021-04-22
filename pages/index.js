import Head from "next/head";
import {useTranslation} from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Layout from "@/layout/default";
import Main from '@/main/home'

function Home({data}) {
    const {t} = useTranslation('home');
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
                      specialties={data.specialties}/>
            </Layout>
        </>
    )
}

export async function getServerSideProps({ locale }) {
    const currentUser = process.env.USER;
    const res = await fetch(`https://arash-pilechi.vercel.app/api/users/${currentUser}/home`);
    const data = await res.json();

    return {
        props: {
            ...await serverSideTranslations(locale, ['common','home']),
            data
        }
    }
}
export default Home