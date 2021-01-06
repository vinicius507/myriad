import Head from "next/head";
import Header from "../../components/headerBlog";
import BlogContainer from "../../components/blogContainer";
import { getSortedPostsData } from "../../lib/blog";
import ListPosts from "../../components/listPosts";
import PortraitMenu from "../../components/portraitMenu";

export default function Blog({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta
          name="description"
          content="My Personal Blog. Anything that inpires me."
        />
      </Head>
      <PortraitMenu />
      <Header />
      <BlogContainer>
        <ListPosts title="Blog Posts" allPostsData={allPostsData} />
      </BlogContainer>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
