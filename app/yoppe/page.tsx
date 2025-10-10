import eyecatch from "images/about.jpg";
import styles from "styles/main.module.scss";
import Heading from "../heading";
import Canvas from "../components/Canvas";

const titlejp = "よっぺ課題";
const titleen = "blender";

//meta
import { siteMeta } from "lib/constants";
const { siteTitle, siteUrl } = siteMeta;

//設定なかった場合のデフォデータ
import { openGraphMetadata, twitterMetadata } from "lib/baseMetadata";

//works meta
const pageTitle = "よっぺ課題";
const pageDesc =
  "メイド・イン・坂本パルコ。制作したデザイン・WEBページ・ライティング・WEB詩集をまとめたページ。何卒、よしなに。";
const ogpTitle = `${pageTitle} - ${siteTitle}`;
const ogpUrl = new URL("/works/", siteUrl).toString();

export const metadata = {
  title: `${pageTitle} - ${siteTitle}`,
  description: pageDesc,
  openGraph: {
    ...openGraphMetadata,
    title: ogpTitle,
    description: pageDesc,
    url: ogpUrl,
    images: [
      {
        url: eyecatch.src,
        width: eyecatch.width,
        height: eyecatch.height,
      },
    ],
  },
  twitter: {
    ...twitterMetadata,
    title: ogpTitle,
    description: pageDesc,
    images: [eyecatch.src],
  },
};

export default function Home() {
  return (
    <>
      <main id="containers">
        <div className={styles.container}>
          <Heading titlejp={titlejp} titleen={titleen} />
          <Canvas />
        </div>
      </main>
    </>
  );
}
