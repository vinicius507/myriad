import Head from "next/head";
import Link from "next/link";
import Date from "../../components/date";
import Header from "../../components/headerBlog";
import styles from "../../styles/post.module.css";
import BlogContainer from "../../components/blogContainer";
import { getAllPostIds, getPostData } from "../../lib/blog";

export default function Post({ postData }) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div>
        <Header />
        <BlogContainer>
          <div className={styles.categories}>
            {postData.categories.split(",").map((category) => (
              <Link key={category} href={`/blog/categories/${category.replace(" ", "-")}`}>
                <a>{category.toUpperCase()}</a>
              </Link>
            ))}
          </div>
          <div className={styles.header}>
            <h1 className={styles.title}>{postData.title}</h1>
            <div className={styles.about}>
              <div className={styles.image}>
                <img src="/images/pp.jpg" />
              </div>{" "}
              <span>
                by Vinícius Gonçalves de Oliveira ·{" "}
                <Date dateTime={postData.date} />
              </span>
            </div>
          </div>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </BlogContainer>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
