import Head from "next/head";
import Link from "next/link";
import Date from "../../components/date";
import Header from "../../components/headerBlog";
import styles from "../../styles/post.module.css";
import utilStyles from "../../styles/utils.module.css";
import BlogContainer from "../../components/blogContainer";
import { getAllPostIds, getPostData, getSortedPostsData } from "../../lib/blog";
import PortraitMenu from "../../components/portraitMenu";


export default function Post({ postData, prev, next }) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <PortraitMenu />
      <div>
        <Header />
        <BlogContainer>
          <div className={styles.header}>
            <h1 className={styles.title}>{postData.title}</h1>
            <div className={styles.about}>
              <div className={styles.image}>
                <Link href="/about">
                  <a>
                    <img src="/images/pp.jpg" />
                  </a>
                </Link>
              </div>{" "}
              <span>by{" "} 
                <Link href="/about">
                  <a>Vinícius Gonçalves de Oliveira</a>
                </Link>
                {" | "}
                <Date dateTime={postData.date} />
              </span>
            </div>
            <div className={utilStyles.categories}>
              {postData.categories.split(",").map((category) => (
                <Link
                  key={category}
                  href={`/blog/categories/${category.replace(" ", "-")}`}
                >
                  <a>{category.toUpperCase()}</a>
                </Link>
              ))}
            </div>
          </div>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </BlogContainer>
        <div className={styles.navigation}>
          {prev && (
            <div className={styles.prev}>
              <Link href={`/blog/${prev.id}`}>
                <a>
                  ← <span className={styles.navtag}>PREVIOUS</span>
                  <span className={styles.navtitle}>{prev.title}</span>
                </a>
              </Link>
            </div>
          )}
          {(prev || next) && <div className={styles.separator}></div>}
          {next && (
            <div className={styles.next}>
              <Link href={`/blog/${next.id}`}>
                <a>
                  <span className={styles.navtitle}>{next.title}</span>
                  <span className={styles.navtag}>NEXT</span> →
                </a>
              </Link>
            </div>
          )}
        </div>
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
  const sortedPosts = getSortedPostsData();
  const prev = sortedPosts[
    sortedPosts.findIndex((post) => post.id == params.id) - 1
  ]
    ? sortedPosts[sortedPosts.findIndex((post) => post.id == params.id) - 1]
    : null;
  const next = sortedPosts[
    sortedPosts.findIndex((post) => post.id == params.id) + 1
  ]
    ? sortedPosts[sortedPosts.findIndex((post) => post.id == params.id) + 1]
    : null;
  return {
    props: {
      postData,
      prev,
      next,
    },
  };
}
