import { useState, useEffect } from "react"; // useState と useEffect をインポート
import BasicSlider from "./slider";
import ArticleSkeleton from "./loading"; // スケルトンコンポーネントをインポート
import styles from "styles/workspost.module.scss";
import MouseStalker from "./components/MouseStalker";
interface WorkItem {
  images: string[];
  link: string;
  title: string;
  description: string;
  tags: string[];
}
// Removed unused BasicSliderProps interface
const worksItems: WorkItem[] = [
  {
    images: [
      "/works/koke-latte_01.png",
      "/works/koke-latte_02.png",
      "/works/koke-latte_03.png",
      "/works/koke-latte_04.png",
    ],
    link: "#",
    title: "title",
    description: "description",
    tags: ["design", "web", "written"],
  },

  {
    images: [
      "/works/kumofre_01.png",
      "/works/koke-latte_02.png",
      "/works/koke-latte_03.png",
    ],
    link: "",
    title: "title",
    description: "Description",
    tags: ["design"],
  },
];

export default function WorkPost() {
  const [works, setWorks] = useState<WorkItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // データ読み込みをシミュレート（非常に短い時間）
    const timer = setTimeout(() => {
      setWorks(worksItems);
      setIsLoading(false);
    }, 200); // ←★ 待機時間を短く設定 (例: 200ミリ秒 = 0.2秒)
    // この時間は 100 から 300 くらいで調整してみてください

    // クリーンアップ関数
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={styles.container}>
      {isLoading ? (
        <>
          <ArticleSkeleton />
          <ArticleSkeleton />
          <ArticleSkeleton />
          <ArticleSkeleton />
          {/* ... */}
        </>
      ) : (
        works.map((item: WorkItem, index: number) => (
          <article key={index} className={styles.article}>
            <BasicSlider images={item.images} />
            <MouseStalker />
            {item.link ? (
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <h2 className={styles.title}>{item.title}</h2>
                <p className={styles.description}>{item.description}</p>
                <p className={styles.tags}>
                  {item.tags.map((tag: string, tagIndex: number) => (
                    <span key={tagIndex} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </p>
              </a>
            ) : (
              <>
                <h2 className={styles.title}>{item.title}</h2>
                <p className={styles.description}>{item.description}</p>
                <p className={styles.tags}>
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </p>
              </>
            )}
          </article>
        ))
      )}
    </div>
  );
}
