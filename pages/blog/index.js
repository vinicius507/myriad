import Head from "next/head";
import Link from "next/link";
import Header from "../../components/headerBlog";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import BlogContainer from "../../components/blogContainer";
import { getSortedPostsData } from "../../lib/blog";
import ListPosts from "../../components/listPosts";

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
