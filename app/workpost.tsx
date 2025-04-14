import { useState, useEffect } from "react";
import BasicSlider from "./slider";
import ArticleSkeleton from "./loading"; // スケルトンコンポーネントをインポート
import styles from "styles/workspost.module.scss";
import MouseStalker from "./components/MouseStalker"; // パスを確認してください

interface WorkItem {
  images: string[];
  link: string;
  title: string;
  description: string;
  tags: string[]; // タグは小文字で統一すると扱いやすい (例: 'web', 'write', 'etc')
}

// 注意: 現在の worksItems には 'web' タグしかありません。
// 'write' や 'etc' でフィルタリングするには、対応するタグを持つアイテムを追加する必要があります。
const worksItems: WorkItem[] = [
  {
    images: [
      "/works/koke-latte_01.png",
      "/works/koke-latte_02.png",
      "/works/koke-latte_03.png",
      "/works/koke-latte_04.png",
    ],
    link: "#",
    title: "苔Latte リーフレット",
    description: "デザインを担当した苔Latteのリーフレットです。",
    tags: ["design", "print"], // 'write' や 'etc' タグを持つアイテムを必要に応じて追加
  },
  {
    images: [
      "/works/kumofre_01.png",
      "/works/kumofre_02.png",
      "/works/kumofre_03.png",
    ],
    link: "",
    title: "くもフリマ SNS宣材",
    description: "くもフリマのSNS宣伝用画像をデザインしました。",
    tags: ["design", "web"], // 'web' タグ
  },
  // 例: Write カテゴリ用のアイテム
  // {
  //   images: ["/works/article_01.png"],
  //   link: "/blog/my-article",
  //   title: "執筆記事サンプル",
  //   description: "これは執筆カテゴリの記事サンプルです。",
  //   tags: ["write", "content"],
  // },
  // 例: Etc カテゴリ用のアイテム
  // {
  //   images: ["/works/other_01.png"],
  //   link: "",
  //   title: "その他の制作物",
  //   description: "これはその他のカテゴリの制作物サンプルです。",
  //   tags: ["etc", "tool"],
  // },
];

// sessionStorage で使うキー
const SESSION_STORAGE_KEY = "hasVisitedWorkPostPage";

// Props の型定義
interface WorkPostProps {
  activeCategory: string; // 'all', 'web', 'write', 'etc' など
}

export default function WorkPost({ activeCategory }: WorkPostProps) {
  // Propsを受け取る
  const [works, setWorks] = useState<WorkItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 選択されたカテゴリに基づいて worksItems をフィルタリング
    let filteredWorks = worksItems;
    if (activeCategory !== "all") {
      filteredWorks = worksItems.filter(
        (item) => item.tags.includes(activeCategory) // activeCategory と同じタグを持つものを抽出
      );
    }
    // else の場合 ('all') はフィルタリングせず全件表示

    // フィルタリングされた結果を state にセット
    setWorks(filteredWorks);

    // --- ローディング & sessionStorage のロジック (変更なし) ---
    if (typeof window !== "undefined") {
      const hasVisited = sessionStorage.getItem(SESSION_STORAGE_KEY);

      if (hasVisited) {
        setIsLoading(false);
      } else {
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 2500);
        sessionStorage.setItem(SESSION_STORAGE_KEY, "true");
        return () => clearTimeout(timer);
      }
    } else {
      setIsLoading(false);
    }
    // --- ローディング & sessionStorage のロジック ここまで ---
  }, [activeCategory]); // activeCategory が変更されたら useEffect を再実行

  return (
    <div className={styles.container}>
      {isLoading ? (
        <>
          {/* スケルトンの数は表示される可能性のある最大数に合わせるか、 */}
          {/* もしくは filteredWorks の数に基づいて動的に変更することも検討できます */}
          <ArticleSkeleton />
          <ArticleSkeleton />
          {/* 必要ならさらに追加 */}
        </>
      ) : // works state (フィルタリング済み) を map する
      works.length > 0 ? ( // フィルタ結果が0件の場合の表示も考慮
        works.map((item: WorkItem, index: number) => (
          <article key={index} className={styles.article}>
            <BasicSlider images={item.images} />
            <MouseStalker />
            <div className={styles.content}>
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
            </div>
          </article>
        ))
      ) : (
        // フィルタ結果が0件の場合のメッセージ
        <p>該当する制作物はありません。</p>
      )}
    </div>
  );
}
