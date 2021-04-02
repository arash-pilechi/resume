import Head from "next/head";
import {useTranslation} from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Layout from "@/layout/default";
import Main from '@/main/specialties'

function Specialties({initialData}) {
  const {t} = useTranslation('specialties');
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
                    initialData={initialData.specialties}/>
          </Layout>
      </>
  )
}

export const getStaticProps = async ({ locale }) => {
  const res = await fetch(`${process.env.HOST}/api/users/${process.env.USER}/specialties`);
  const initialData = await res.json();
  return{
    props: {
      ...await serverSideTranslations(locale, ['common','specialties']),
      initialData
    },
  }
}
export default Specialties