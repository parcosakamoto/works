import styles from "styles/ArticleSkeleton.module.scss";

export default function Loading() {
  return (
    <article className={styles.skeletonArticle}>
      <div className={styles.skeletonThumb}></div>
      <div className={styles.skeletonTitle}></div>
    </article>
  );
}
