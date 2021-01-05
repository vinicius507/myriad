import Link from "next/link";
import Date from "./date";
import styles from "./listPosts.module.css";

export default function ListPosts({ title, allPostsData }) {
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <ul className={styles.list}>
        {allPostsData.map(({ id, date, title, categories }) => (
          <li className={styles.listItem} key={id}>
            <Link href={`/blog/${id}`}>
              <a>{title}</a>
            </Link>
            <br/>
            <small className={styles.lightText}>
              <Date dateTime={date} />
            </small>
            <div className={styles.categories}>
              {categories.split(",").map((category) => (
                <Link
                  key={category}
                  href={`/blog/categories/${category.replace(" ", "-")}`}
                >
                  <a>{category.toUpperCase()}</a>
                </Link>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
