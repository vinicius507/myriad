import Head from 'next/head'
import LayoutHome, { siteTitle } from '../components/layoutHome'

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta lang="en_US" />
      </Head>
      <LayoutHome home />
    </>
  )
}