import Head from "next/head";
import Link from "next/link";
import Header from "../../../components/headerBlog";
import Date from "../../../components/date";
import utilStyles from "../../../styles/utils.module.css";
import BlogContainer from "../../../components/blogContainer";
import {
  getAllPostsCategories,
  getSortedCategoryPosts,
} from "../../../lib/blog";
import ListPosts from "../../../components/listPosts";

export default function Category({ allPostsData, category }) {
  const title = category.replace("-", " ").replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="My Personal Blog. Anything that inpires me."
        />
      </Head>
      <Header />
      <BlogContainer>
        <ListPosts
          title={title}
          allPostsData={allPostsData}
        />
      </BlogContainer>
    </>
  );
}

export function getStaticPaths() {
  const paths = getAllPostsCategories();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const allPostsData = getSortedCategoryPosts(params.id);
  return {
    props: {
      allPostsData,
      category: params.id,
    },
  };
}
