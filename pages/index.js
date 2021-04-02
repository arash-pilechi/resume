import Head from "next/head";
import {useTranslation} from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Layout from "@/layout/default";
import Main from '@/main/home'

function Home({initialData}) {
  const {t} = useTranslation('home');
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
  const res = await fetch(`${process.env.HOST}/api/users/${process.env.USER}/home`);
  const initialData = await res.json();
  return{
    props: {
      ...await serverSideTranslations(locale, ['common','home']),
      initialData
    },
  }
}
export default Home