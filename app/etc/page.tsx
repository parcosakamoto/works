//"use client";
import eyecatch from "images/about.jpg";
import Main from "app/main";

//meta
import { siteMeta } from "lib/constants";
const { siteTitle, siteUrl } = siteMeta;

//設定なかった場合のデフォデータ
import { openGraphMetadata, twitterMetadata } from "lib/baseMetadata";

//works meta
const pageTitle = "その他制作物";
const pageDesc =
  "メイド・イン・坂本パルコ。制作したその他制作物をまとめたページ。何卒、よしなに。";
const ogpTitle = `${pageTitle} - ${siteTitle}`;
const ogpUrl = new URL("/works/etc/", siteUrl).toString();

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

export default function worksEtc() {
  return (
    <>
      <Main etcOn={true} webOn={false} writeOn={false} />
    </>
  );
}
