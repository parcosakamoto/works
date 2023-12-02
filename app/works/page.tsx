import eyecatch from "images/about.jpg";
import Main from "app/main";

//meta
import { siteMeta } from "lib/constants";
const { siteTitle, siteUrl } = siteMeta;

//設定なかった場合のデフォデータ
import { openGraphMetadata, twitterMetadata } from "lib/baseMetadata";

//works meta
const pageTitle = "ポートフォリオ";
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
        with: eyecatch.width,
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
      <Main etcOn={false} webOn={false} writeOn={false} />
    </>
  );
}
