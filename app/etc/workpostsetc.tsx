import styles from "styles/works.module.scss";
import Warticle from "app/warticle";
import Image from "next/image";
//import imageLoader from "lib/imageLoader";
export const worksListEtc = [
  {
    id: 1,
    title: "第3回くもマルシェフライヤー・SNS宣材",
    url: "https://outsider.daa.jp/joushu-ji/kumomaru2023-03/",
    eyecatch: "/works/kumomaru03.png",
    link: "_blank",
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
    id: 6,
    title: "くもマルシェフライヤー・SNS宣材",
    url: "https://outsider.daa.jp/joushu-ji/kumomaru2022/",
    eyecatch: "/works/kumomaru02.jpg",
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
    id: 21,
    title: "今日のゲーム ロゴデザイン",
    url: "",
    eyecatch: "/works/msmn_04.jpg",
    link: "",
  },
];

export default function WorkPostsEtc() {
  return (
    <section className={styles.works}>
      {worksListEtc.map(({ url, title, eyecatch, id, link }) => (
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
