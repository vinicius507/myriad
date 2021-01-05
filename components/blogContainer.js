import styles from "./blogContainer.module.css";

export default function BlogContainer({ children }) {
  return (
    <>
      <div className={styles.container}>{children}</div>
    </>
  );
}
