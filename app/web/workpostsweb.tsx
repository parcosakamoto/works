import styles from "styles/works.module.scss";
import Warticle from "app/warticle";
import Image from "next/image";
//import imageLoader from "lib/imageLoader";
export const worksListWeb = [
  {
    id: 0,
    title: "くもフリマ秋 SNS宣材",
    url: "",
    eyecatch: "/works/kumoflea_2411_insta.webp",
    link: "",
  },
  {
    id: 1,
    title: "スナックくも SNS宣材",
    url: "",
    eyecatch: "/works/snackkumo_web.webp",
    link: "",
  },
  {
    id: 2,
    title: "スタジオエスポワール 新年度キャンペーンバナー",
    url: "https://studio-espoir.com/4%e6%9c%88%e3%81%af%e6%96%b0%e5%b9%b4%e5%ba%a6%e3%82%ad%e3%83%a3%e3%83%b3%e3%83%9a%e3%83%bc%e3%83%b3%e3%81%a7%e3%83%88%e3%83%a9%e3%83%b3%e3%82%b9%e3%83%93%e3%83%bc%e3%83%88%e3%82%84%e5%b0%8f%e9%a1%94/",
    eyecatch: "/works/espoir_campaign.png",
    link: "_blank",
  },
  {
    id: 2,
    title: "くもフリマ SNS宣材",
    url: "https://www.instagram.com/jyoushuuji/",
    eyecatch: "/works/kumofleasns.avif",
    link: "_blank",
  },
  {
    id: 3,
    title: "第3回くもマルシェフライヤー・SNS宣材",
    url: "https://outsider.daa.jp/joushu-ji/kumomaru2023-03/",
    eyecatch: "/works/kumomaru03.png",
    link: "_blank",
  },
  {
    id: 4,
    title: "ウゴービメタボリック治療",
    url: "",
    eyecatch: "/works/plka.webp",
    link: "",
  },
  {
    id: 5,
    title: "第2回くもマルシェ フライヤー・SNS宣材",
    url: "",
    eyecatch: "/works/kumomaru_02.webp",
    link: "",
  },
  {
    id: 6,
    title: "スタジオエスポワール",
    url: "https://studio-espoir.com/",
    eyecatch: "/works/es.jpg",
    link: "_blank",
  },
  {
    id: 7,
    title: "くもマルシェ フライヤー・SNS宣材",
    url: "https://outsider.daa.jp/joushu-ji/kumomaru2022/",
    eyecatch: "/works/kumomaru.jpg",
    link: "_blank",
  },
  {
    id: 8,
    title: "ふくふく代行サービス",
    url: "https://fukufukudaiko.com/",
    eyecatch: "/works/fukufukudaiko.jpg",
    link: "_blank",
  },
  {
    id: 9,
    title: "浄秀寺",
    url: "https://outsider.daa.jp/joushu-ji/",
    eyecatch: "/works/smn_01.jpg",
    link: "_blank",
  },
  {
    id: 10,
    title: "春秋蜜柑 坂本パルコ×武田地球",
    url: "https://samikan.site/",
    eyecatch: "/works/samikan.jpg",
    link: "_blank",
  },
  {
    id: 11,
    title: "詩誌 OUTSIDER",
    url: "https://outsider.daa.jp/",
    eyecatch: "/works/outsider.png",
    link: "_blank",
  },
  {
    id: 12,
    title: "すずなかさんが通る",
    url: "",
    eyecatch: "/works/sznk.webp",
    link: "",
  },
  {
    id: 13,
    title: "アンチョビとキャベツ",
    url: "/anchovies_and_cabbage/",
    eyecatch: "/works/anchobi.png",
    link: "_blank",
  },
  {
    id: 14,
    title: "グルメカタログギフト『旨島 - umashima - 』",
    url: "https://parco.chobi.net/umashima/",
    eyecatch: "/works/smn_04.jpg",
    link: "_blank",
  },
];

export default function WorkPostsWeb() {
  return (
    <section className={styles.works}>
      {worksListWeb.map(({ url, title, eyecatch, id, link }) => (
        <Warticle
          title={title}
          url={url}
          eyecatch={eyecatch}
          key={id}
          link={link}
        />
      ))}
    </section>
  );
}
