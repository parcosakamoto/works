import styles from "styles/works.module.scss";
import Warticle from "app/warticle";
import Image from "next/image";
//import imageLoader from "lib/imageLoader";
export const worksListEtc = [
  {
    id: 0,
    title: "苔latte リーフレット",
    url: "",
    eyecatch: "/works/koke-latte.avif",
    link: "",
  },
  {
    id: 1,
    title: "くもフリマ秋 ポスター",
    url: "",
    eyecatch: "/works/kumoflea_2411.webp",
    link: "",
  },
  {
    id: 2,
    title: "スナックくも フライヤー",
    url: "",
    eyecatch: "/works/snackumo.webp",
    link: "",
  },
  {
    id: 3,
    title: "くもフリマ ポスター",
    url: "",
    eyecatch: "/works/kumoflea.avif",
    link: "",
  },
  {
    id: 4,
    title: "くもフリマ SNS宣材",
    url: "https://www.instagram.com/jyoushuuji/",
    eyecatch: "/works/kumofleasns.avif",
    link: "_blank",
  },
  {
    id: 5,
    title: "第3回くもマルシェフライヤー・SNS宣材",
    url: "https://outsider.daa.jp/joushu-ji/kumomaru2023-03/",
    eyecatch: "/works/kumomaru03.png",
    link: "_blank",
  },
  {
    id: 6,
    title: "関龍馬選挙宣材",
    url: "",
    eyecatch: "/works/seki_reef.webp",
    link: "",
  },
  {
    id: 7,
    title: "第2回くもマルシェフライヤー・SNS宣材",
    url: "",
    eyecatch: "/works/kumomaru_02.webp",
    link: "",
  },
  {
    id: 8,
    title: "くもマルシェフライヤー・SNS宣材",
    url: "https://outsider.daa.jp/joushu-ji/kumomaru2022/",
    eyecatch: "/works/kumomaru02.jpg",
    link: "_blank",
  },
  {
    id: 9,
    title: "春秋蜜柑 告知フライヤー",
    url: "",
    eyecatch: "/works/reef.png",
    link: "",
  },
  {
    id: 10,
    title: "今日のゲーム ロゴデザイン",
    url: "",
    eyecatch: "/works/msmn_04.jpg",
    link: "",
  },
  {
    id: 11,
    title: "アートイベント アネモネ ロゴデザイン",
    url: "",
    eyecatch: "/works/anemone.avif",
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
