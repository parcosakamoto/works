import styles from "styles/works.module.scss";
import Warticle from "./warticle";
import Image from "next/image";
//import imageLoader from "lib/imageLoader";
export const worksList = [
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
    id: 3,
    title: "関龍馬選挙宣材",
    url: "",
    eyecatch: "/works/seki_reef.webp",
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
    eyecatch: "/works/kumomaru02.jpg",
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
    title: "春秋蜜柑 告知フライヤー",
    url: "",
    eyecatch: "/works/reef.png",
    link: "",
  },

  {
    id: 12,
    title: "詩誌 OUTSIDER",
    url: "https://outsider.daa.jp/",
    eyecatch: "/works/outsider.png",
    link: "_blank",
  },
  {
    id: 13,
    title: "アンチョビとキャベツ",
    url: "/anchovies_and_cabbage/",
    eyecatch: "/works/anchobi.png",
    link: "_blank",
  },
  {
    id: 15,
    title: "日曜日にカゼをひく",
    url: "/kaerimasu/have_a_cold_on_sunday.html",
    eyecatch: "/works/sunday2.png",
    link: "",
  },
  {
    id: 16,
    title: "実家に、帰ります。",
    url: "/kaerimasu/works/000.html",
    eyecatch: "/works/00smn.jpg",
    link: "",
  },
  {
    id: 17,
    title: "或る日Ⅲ",
    url: "/kaerimasu/works/032.html",
    eyecatch: "/works/poest32_2.jpg",
    link: "",
  },
  {
    id: 18,
    title: "日和",
    url: "/kaerimasu/works/031.html",
    eyecatch: "/works/poest31_2.jpg",
    link: "_blank",
  },
  {
    id: 19,
    title: "恋",
    url: "/kaerimasu/works/024.html",
    eyecatch: "/works/poest24_2.jpg",
    link: "",
  },
  {
    id: 20,
    title: "late summer",
    url: "/kaerimasu/works/022.html",
    eyecatch: "/works/poest22_2.jpg",
    link: "",
  },
  {
    id: 21,
    title: "今日のゲーム",
    url: "",
    eyecatch: "/works/msmn_04.jpg",
    link: "",
  },
];

export default function WorkPosts() {
  return (
    <section className={styles.works}>
      {worksList.map(({ url, title, eyecatch, id, link }) => (
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
