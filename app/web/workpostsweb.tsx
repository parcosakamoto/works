import styles from "styles/works.module.scss";
import Warticle from "app/warticle";
import Image from "next/image";
//import imageLoader from "lib/imageLoader";
export const worksListWeb = [
  {
    id: 1,
    title: "第3回くもマルシェフライヤー・SNS宣材",
    url: "https://outsider.daa.jp/joushu-ji/kumomaru2023-03/",
    eyecatch: "/works/kumomaru03.png",
    link: "_blank",
  },
  {
    id: 2,
    title: "ウゴービメタボリック治療",
    url: "",
    eyecatch: "/works/plka.webp",
    link: "",
  },
  {
    id: 4,
    title: "第2回くもマルシェフライヤー・SNS宣材",
    url: "",
    eyecatch: "/works/kumomaru_02.webp",
    link: "",
  },
  {
    id: 5,
    title: "スタジオエスポワール",
    url: "https://studio-espoir.com/",
    eyecatch: "/works/es.jpg",
    link: "_blank",
  },
  {
    id: 6,
    title: "くもマルシェフライヤー・SNS宣材",
    url: "https://outsider.daa.jp/joushu-ji/kumomaru2022/",
    eyecatch: "/works/kumomaru.jpg",
    link: "_blank",
  },
  {
    id: 7,
    title: "ふくふく代行サービス",
    url: "https://fukufukudaiko.com/",
    eyecatch: "/works/fukufukudaiko.jpg",
    link: "_blank",
  },
  {
    id: 8,
    title: "浄秀寺",
    url: "https://outsider.daa.jp/joushu-ji/",
    eyecatch: "/works/smn_01.jpg",
    link: "_blank",
  },
  {
    id: 9,
    title: "春秋蜜柑 坂本パルコ×武田地球",
    url: "https://samikan.site/",
    eyecatch: "/works/samikan.jpg",
    link: "_blank",
  },
  {
    id: 10,
    title: "詩誌 OUTSIDER",
    url: "https://outsider.daa.jp/",
    eyecatch: "/works/outsider.png",
    link: "_blank",
  },
  {
    id: 11,
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
