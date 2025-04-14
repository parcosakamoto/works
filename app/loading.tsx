import styles from "styles/ArticleSkeleton.module.scss";

export default function Loading() {
  return (
    <article className={styles.skeletonArticle}>
      <div className={styles.skeletonThumb}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles.skeletonTitle}></div>
      <div className={styles.skeletonDesc}></div>
      <div className={styles.skeletonTags}>
        <span></span> <span></span>
        <span></span>
      </div>
    </article>
  );
}
