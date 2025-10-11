import { useState, useEffect, useRef } from "react";
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

//  'web''write' や 'etc' でフィルタリング
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
    tags: ["#デザイン", "#ライティング", "#チラシ・リーフレット"], // 'web' タグ
    tag: ["write", "etc"],
  },
  {
    images: [
      "/works/samikan.png",
      "/works/samikan_01.jpg",
      "/works/samikan_02.jpg",
      "/works/samikan_03.jpg",
      "/works/samikan_04.jpg",
      "/works/samikan_06.png",
      "/works/samikan_05.png",
    ],
    link: "https://samikan.site",
    title: "ウェブマガジン 春秋蜜柑",
    description:
      "ふたりの人気Poestが贈る<br>ちょっと嬉しい<br>日めくり詩エッセイ",
    tags: ["#デザイン", "#ライティング", "#チラシ・リーフレット"], // 'web' タグ
    tag: ["web", "write"],
  },
  {
    images: [
      "/works/anchovies_and_cabbage.png",
      "/works/anchovies_and_cabbage_1.png",
      "/works/anchovies_and_cabbage_3.png",
      "/works/anchovies_and_cabbage_4.png",
      "/works/anchovies_and_cabbage_5.png",
      "/works/anchovies_and_cabbage_6.png",
      "/works/anchovies_and_cabbage_7.png",
    ],
    link: "https://parco.chobi.net/anchovies_and_cabbage/",
    title: "アンチョビとキャベツ",
    description:
      "不寛容さと思いやりは完全に同居し得る。<br>というよりも、それらが同居していない人間などどこにもいない。",
    tags: ["#デザイン", "#ライティング", "#詩集"], // 'web' タグ
    tag: ["web", "write"],
  },
  {
    images: [
      "/works/sundaycold.png",
      "/works/sundaycold_1.png",
      "/works/sundaycold_2.png",
      "/works/sundaycold_3.png",
      "/works/sundaycold_4.png",
    ],
    link: "https://parco.chobi.net/kaerimasu/have_a_cold_on_sunday.html",
    title: "日曜日にカゼをひく",
    description:
      "過ぎていく空しさ、ちょっとしたハッピイ、<br>そこに在る筆者を、誰もがのぞきこみ、恋をする。",
    tags: ["#デザイン", "#ライティング", "#詩集", "#新聞"], // 'web' タグ
    tag: ["web", "write"],
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

interface WorkPostProps {
  activeCategory: string;
}

export default function WorkPost({ activeCategory }: WorkPostProps) {
  const [works, setWorks] = useState<WorkItem[]>([]);
  const [visibleCount, setVisibleCount] = useState(5); // ← 初期表示件数
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let filtered = worksItems;
    if (activeCategory !== "all") {
      filtered = worksItems.filter((item) => item.tag.includes(activeCategory));
    }
    setWorks(filtered);
    setVisibleCount(5); // ← カテゴリ切り替え時リセット

    if (typeof window !== "undefined") {
      const hasVisited = sessionStorage.getItem(SESSION_STORAGE_KEY);
      if (hasVisited) {
        setIsLoading(false);
      } else {
        const timer = setTimeout(() => setIsLoading(false), 2500);
        sessionStorage.setItem(SESSION_STORAGE_KEY, "true");
        return () => clearTimeout(timer);
      }
    } else {
      setIsLoading(false);
    }
  }, [activeCategory]);
  // SP判定用 useEffect を追加
  useEffect(() => {
    const checkMobile = () => {
      // 画面幅が 768px 以下の場合をモバイルと判断 (例)
      setIsMobile(window.innerWidth <= 768);
    };

    if (typeof window !== "undefined") {
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, []);
  // === IntersectionObserverで無限スクロール実装 ===
  useEffect(() => {
    // 初期ロード中の場合は処理をスキップ
    if (isLoading) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          // 次のアイテムを読み込む
          setVisibleCount((prev) => {
            const nextCount = prev + 5;
            return nextCount <= works.length ? nextCount : works.length;
          });
        }
      },
      { threshold: 0.5 }
    );

    const currentLoader = loaderRef.current;
    // loaderTriggerが存在する場合のみ監視を開始
    if (currentLoader) observer.observe(currentLoader);

    return () => {
      if (currentLoader) observer.unobserve(currentLoader);
    };
  }, [works, isLoading]); // ← isLoading を依存配列に追加
  const visibleWorks = works.slice(0, visibleCount);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <>
          <ArticleSkeleton />
          <ArticleSkeleton />
          <ArticleSkeleton />
        </>
      ) : works.length > 0 ? (
        <>
          {visibleWorks.map((item, index) => (
            <article
              key={index}
              className={`${styles.article} ${zenKakuGothicNew.className}`}
            >
              <BasicSlider images={item.images} index={index} />{" "}
              {/* indexを渡す */}
              {/* マウスストーカーをPCでのみ表示 */}
              {!isMobile && <MouseStalker />} {/* ← 判定を追加 */}
              <div className={styles.content}>
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <h2 className={styles.title}>{item.title}</h2>
                    <p
                      className={styles.description}
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                    <p className={styles.tags}>
                      {item.tags.map((tag, i) => (
                        <span key={i} className={styles.tag}>
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
                      {item.tags.map((tag, i) => (
                        <span key={i} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </p>
                  </>
                )}
              </div>
            </article>
          ))}
          {/* スクロール検知トリガー */}
          {visibleCount < works.length && (
            <div ref={loaderRef} className={styles.loaderTrigger}>
              <ArticleSkeleton />
            </div>
          )}
        </>
      ) : (
        <p>該当する制作物はありません。</p>
      )}
    </div>
  );
}
