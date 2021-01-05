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
  return (
    <>
      <Head>
        <title>{category.toUpperCase().replace("-"," ")}</title>
        <meta
          name="description"
          content="My Personal Blog. Anything that inpires me."
        />
      </Head>
      <Header />
      <BlogContainer>
        <ListPosts title={category.toUpperCase().replace("-"," ")} allPostsData={allPostsData} />
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
