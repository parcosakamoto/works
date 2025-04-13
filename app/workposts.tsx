import { useState, useEffect } from "react"; // useState と useEffect をインポート
import styles from "styles/works.module.scss";
import Warticle from "./warticle";
import ArticleSkeleton from "./loading"; // スケルトンコンポーネントをインポート
// import Image from "next/image"; // WorkPosts では直接使われていないので削除してもOK
// import imageLoader from "lib/imageLoader";
const initialWorksList = [
  {
    id: 0,
    title: "くもフリマ春 ポスター SNS宣材",
    url: "",
    eyecatch: "/works/kumo2025ss.avif",
    link: "",
  },
  {
    id: 1,
    title: "苔latte リーフレット",
    url: "",
    eyecatch: "/works/koke-latte.avif",
    link: "",
  },
  {
    id: 2,
    title: "くもフリマ秋 SNS宣材",
    url: "",
    eyecatch: "/works/kumoflea_2411_insta.webp",
    link: "",
  },
  {
    id: 3,
    title: "くもフリマ秋 ポスター",
    url: "",
    eyecatch: "/works/kumoflea_2411.webp",
    link: "",
  },
  {
    id: 4,
    title: "スナックくも フライヤー",
    url: "",
    eyecatch: "/works/snackumo.webp",
    link: "",
  },
  {
    id: 5,
    title: "スナックくも SNS宣材",
    url: "",
    eyecatch: "/works/snackkumo_web.webp",
    link: "",
  },
  {
    id: 6,
    title: "スタジオエスポワール 新年度キャンペーンバナー",
    url: "https://studio-espoir.com/4%e6%9c%88%e3%81%af%e6%96%b0%e5%b9%b4%e5%ba%a6%e3%82%ad%e3%83%a3%e3%83%b3%e3%83%9a%e3%83%bc%e3%83%b3%e3%81%a7%e3%83%88%e3%83%a9%e3%83%b3%e3%82%b9%e3%83%93%e3%83%bc%e3%83%88%e3%82%84%e5%b0%8f%e9%a1%94/",
    eyecatch: "/works/espoir_campaign.png",
    link: "_blank",
  },
  {
    id: 7,
    title: "くもフリマ ポスター",
    url: "",
    eyecatch: "/works/kumoflea.avif",
    link: "",
  },
  {
    id: 8,
    title: "くもフリマ SNS宣材",
    url: "https://www.instagram.com/jyoushuuji/",
    eyecatch: "/works/kumofleasns.avif",
    link: "_blank",
  },
  {
    id: 9,
    title: "第3回くもマルシェ フライヤー・SNS宣材",
    url: "https://outsider.daa.jp/joushu-ji/kumomaru2023-03/",
    eyecatch: "/works/kumomaru03.png",
    link: "_blank",
  },
  {
    id: 10,
    title: "ウゴービメタボリック治療",
    url: "",
    eyecatch: "/works/plka.webp",
    link: "",
  },
  {
    id: 11,
    title: "関龍馬選挙宣材",
    url: "",
    eyecatch: "/works/seki_reef.webp",
    link: "",
  },
  {
    id: 12,
    title: "第2回くもマルシェ フライヤー・SNS宣材",
    url: "",
    eyecatch: "/works/kumomaru_02.webp",
    link: "",
  },
  {
    id: 13,
    title: "スタジオエスポワール",
    url: "https://studio-espoir.com/",
    eyecatch: "/works/es.jpg",
    link: "_blank",
  },
  {
    id: 14,
    title: "くもマルシェ フライヤー・SNS宣材",
    url: "https://outsider.daa.jp/joushu-ji/kumomaru2022/",
    eyecatch: "/works/kumomaru02.jpg",
    link: "_blank",
  },
  {
    id: 15,
    title: "ふくふく代行サービス",
    url: "https://fukufukudaiko.com/",
    eyecatch: "/works/fukufukudaiko.jpg",
    link: "_blank",
  },
  {
    id: 16,
    title: "浄秀寺",
    url: "https://outsider.daa.jp/joushu-ji/",
    eyecatch: "/works/smn_01.jpg",
    link: "_blank",
  },
  {
    id: 17,
    title: "春秋蜜柑 坂本パルコ×武田地球",
    url: "https://samikan.site/",
    eyecatch: "/works/samikan.jpg",
    link: "_blank",
  },
  {
    id: 18,
    title: "春秋蜜柑 告知フライヤー",
    url: "",
    eyecatch: "/works/reef.png",
    link: "",
  },

  {
    id: 19,
    title: "詩誌 OUTSIDER",
    url: "https://outsider.daa.jp/",
    eyecatch: "/works/outsider.png",
    link: "_blank",
  },
  {
    id: 20,
    title: "アンチョビとキャベツ",
    url: "/anchovies_and_cabbage/",
    eyecatch: "/works/anchobi.png",
    link: "_blank",
  },
  {
    id: 21,
    title: "すずなかさんが通る",
    url: "",
    eyecatch: "/works/sznk.webp",
    link: "",
  },
  {
    id: 22,
    title: "日曜日にカゼをひく",
    url: "/kaerimasu/have_a_cold_on_sunday.html",
    eyecatch: "/works/sunday2.png",
    link: "",
  },
  {
    id: 23,
    title: "実家に、帰ります。",
    url: "/kaerimasu/works/000.html",
    eyecatch: "/works/00smn.jpg",
    link: "",
  },
  {
    id: 24,
    title: "或る日Ⅲ",
    url: "/kaerimasu/works/032.html",
    eyecatch: "/works/poest32_2.jpg",
    link: "",
  },
  {
    id: 25,
    title: "日和",
    url: "/kaerimasu/works/031.html",
    eyecatch: "/works/poest31_2.jpg",
    link: "_blank",
  },
  {
    id: 26,
    title: "恋",
    url: "/kaerimasu/works/024.html",
    eyecatch: "/works/poest24_2.jpg",
    link: "",
  },
  {
    id: 27,
    title: "late summer",
    url: "/kaerimasu/works/022.html",
    eyecatch: "/works/poest22_2.jpg",
    link: "",
  },
  {
    id: 28,
    title: "今日のゲーム",
    url: "",
    eyecatch: "/works/msmn_04.jpg",
    link: "",
  },
];
export default function WorkPosts(): JSX.Element {
  // useState で作品リストとローディング状態を管理
  const [works, setWorks] = useState<
    { id: number; title: string; url: string; eyecatch: string; link: string }[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // データ読み込みをシミュレート
    const timer = setTimeout(() => {
      setWorks(initialWorksList); // データを state にセット
      setIsLoading(false); // ローディング完了
    }, 1500); // 1.5秒後に読み込み完了とする (時間は調整可能)

    // クリーンアップ関数: コンポーネントがアンマウントされる時にタイマーをクリア
    return () => clearTimeout(timer);
  }, []); // 空の依存配列で、マウント時に一度だけ実行

  // 注意: 元の worksList では id が重複していました。
  // React のリストで `key` に使う値は一意である必要があります。
  // ここでは仮に worksList の id を修正しましたが、
  // もし id が一意でない場合は、map の第二引数 index を key に使うことも検討できます。
  // 例: <Warticle key={index} ... /> ただし、リストの順序が変わらない場合に限ります。

  return (
    <section className={styles.works}>
      {isLoading ? (
        // ローディング中はスケルトンを表示
        <>
          <ArticleSkeleton />
          <ArticleSkeleton />
          <ArticleSkeleton />
          <ArticleSkeleton />
          <ArticleSkeleton />
          <ArticleSkeleton />
          <ArticleSkeleton />
          <ArticleSkeleton />
        </>
      ) : (
        // ローディング完了後は実際の作品リストを表示
        works.map(({ url, title, eyecatch, id, link }, index) => (
          <Warticle
            title={title}
            url={url}
            eyecatch={eyecatch}
            key={id}
            link={link}
          />
        ))
      )}
    </section>
  );
}
