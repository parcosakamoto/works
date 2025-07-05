import { useState, useEffect } from "react";
import BasicSlider from "./slider";
import ArticleSkeleton from "./loading"; // スケルトンコンポーネントをインポート
import styles from "styles/workspost.module.scss";
import MouseStalker from "./components/MouseStalker"; // パスを確認してください
import { Zen_Kaku_Gothic_New } from "next/font/google";

export const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  weight: ["300", "400"],
  subsets: ["latin"],
  display: "swap",
});

interface WorkItem {
  images: string[];
  link: string;
  title: string;
  description: string;
  tags: string[];
  tag: string[];
  // タグは小文字で統一すると扱いやすい (例: 'web', 'write', 'etc')
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
    link: "https://www.instagram.com/koke_latte/",
    title: "苔Latte リーフレット",
    description: "ちいさな森の育て方<br>なんか、もっと知りたいかも。",
    tags: ["#デザイン", "#チラシ・リーフレット", "#キャッチコピー"],
    tag: ["write", "etc"],
  },
  {
    images: [
      "/works/kumof_logo.png",
      "/works/kumof_01.jpg",
      "/works/kumof_sns.png",
      "/works/kumof_pic.jpg",
      "/works/kumof_up.png",
      "/works/kumof_02.png",
      "/works/kumof_04.png",
    ],
    link: "https://www.instagram.com/p/DG2X9UNS3yG/",
    title: "くもフリマ",
    description: "お寺でフリマ<br>休日にお寺に行くのもいいじゃん",
    tags: [
      "#デザイン",
      "#ロゴ",
      "#キャッチコピー",
      "#チラシ・リーフレット",
      "#SNS宣材",
    ], // 'web' タグ
    tag: ["web", "write"],
  },
  {
    images: [
      "/works/studioespoir_01.jpg",
      "/works/studioespoir_02.png",
      "/works/studioespoir_03.jpg",
      "/works/studioespoir_04.png",
      "/works/studioespoir_05.png",
    ],
    link: "https://studio-espoir.com/",
    title: "スタジオエスポワール",
    description: "FIT TO ME<br>目的に合わせたトレーニングサポート",
    tags: ["#デザイン", "#ロゴ", "#キャッチコピー", "#写真撮影", "#CMS構築"], // 'web' タグ
    tag: ["web", "write"],
  },
  {
    images: [
      "/works/snackumo_01.png",
      "/works/snackumo_02.png",
      "/works/snackumo_03.png",
    ],
    link: "",
    title: "スナックくも",
    description: "2023年 ネオン本堂を舞台に<br>一夜だけのスナックがオープン",
    tags: [
      "#デザイン",
      "#ロゴ",
      "#キャッチコピー",
      "#チラシ・リーフレット",
      "#SNS宣材",
    ], // 'web' タグ
    tag: ["web", "write"],
  },
  {
    images: [
      "/works/kumomaru_01.jpg",
      "/works/kumomaru.png",
      "/works/kumomaru_flag.jpg",
      "/works/kumomaru_pic.jpg",
      "/works/kumomaru_post.png",
    ],
    link: "",
    title: "くもマルシェ",
    description: "それはつまり、<br>お寺がつなぐ、人とマルシェなのだ",
    tags: [
      "#デザイン",
      "#ロゴ",
      "#キャッチコピー",
      "#チラシ・リーフレット",
      "#SNS宣材",
    ], // 'web' タグ
    tag: ["web", "write"],
  },
  {
    images: [
      "/works/seki_01.jpg",
      "/works/seki_02.jpg",
      "/works/seki_03.jpg",
      "/works/seki_04.jpg",
    ],
    link: "",
    title: "関龍馬 選挙商材",
    description: "小千谷現役世代<br>これからの小千谷を創る4つの提案",
    tags: ["#デザイン", "#ライティング", "#チラシ・リーフレット", ,], // 'web' タグ
    tag: ["write", "etc"],
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
        (item) => item.tag.includes(activeCategory) // activeCategory と同じタグを持つものを抽出
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
          <article
            key={index}
            className={`${styles.article} ${zenKakuGothicNew.className}`}
          >
            <BasicSlider images={item.images} />
            <MouseStalker />
            <div className={styles.content}>
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <h2 className={styles.title}>{item.title}</h2>
                  <p
                    className={styles.description}
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
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
                  <p
                    className={styles.description}
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
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
