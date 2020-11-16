import Head from 'next/head'
import Homepage from '../components/homepage'
import { siteTitle } from '../components/layout'


export default function Home() {
  return (
    <Homepage home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    </Homepage>
  )
}