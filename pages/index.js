import Head from "next/head";
import LayoutHome, { siteTitle } from "../components/layoutHome";

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta
          name="description"
          content="Hire professional freelancer and Web Developer. Building interactive experiences."
        />
      </Head>
      <LayoutHome home />
    </>
  );
}
