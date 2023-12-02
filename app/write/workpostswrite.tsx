import styles from "styles/works.module.scss";
import Warticle from "app/warticle";
import Image from "next/image";
//import imageLoader from "lib/imageLoader";
export const worksListWrite = [
  {
    id: 0,
    title: "関龍馬選挙宣材",
    url: "",
    eyecatch: "/works/seki_reef.webp",
    link: "",
  },
  {
    id: 0,
    title: "たびぽえ (2021秋冬号 VOL.1)",
    url: "https://amzn.asia/d/8W5UGpD",
    eyecatch: "/works/tabipoe.jpg",
    link: "_blank",
  },
  {
    id: 2,
    title: "春秋蜜柑 坂本パルコ×武田地球",
    url: "https://samikan.site/",
    eyecatch: "/works/samikan.jpg",
    link: "_blank",
  },
  {
    id: 3,
    title: "春秋蜜柑 告知フライヤー",
    url: "",
    eyecatch: "/works/reef.png",
    link: "",
  },
  {
    id: 4,
    title: "詩誌 OUTSIDER",
    url: "https://outsider.daa.jp/",
    eyecatch: "/works/outsider.png",
    link: "_blank",
  },
  {
    id: 5,
    title: "アンチョビとキャベツ",
    url: "/anchovies_and_cabbage/",
    eyecatch: "/works/anchobi.png",
    link: "_blank",
  },
  {
    id: 6,
    title: "日曜日にカゼをひく",
    url: "/kaerimasu/have_a_cold_on_sunday.html",
    eyecatch: "/works/sunday2.png",
    link: "",
  },
  {
    id: 7,
    title: "実家に、帰ります。",
    url: "/kaerimasu/works/000.html",
    eyecatch: "/works/00smn.jpg",
    link: "",
  },
  {
    id: 8,
    title: "新潟情報誌",
    url: "",
    eyecatch: "/works/book_01.jpg",
    link: "",
  },
];

export default function WorkPostsWrite() {
  return (
    <section className={styles.works}>
      {worksListWrite.map(({ url, title, eyecatch, id, link }) => (
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
