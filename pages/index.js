import Head from 'next/head'
import LayoutHome, { siteTitle } from '../components/layoutHome'

export default function Home() {
  return (
    <LayoutHome home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    </LayoutHome>
  )
}