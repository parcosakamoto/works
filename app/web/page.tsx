//"use client";
import eyecatch from "images/about.jpg";
import Main from "app/main";

//meta
import { siteMeta } from "lib/constants";
const { siteTitle, siteUrl } = siteMeta;

//設定なかった場合のデフォデータ
import { openGraphMetadata, twitterMetadata } from "lib/baseMetadata";

//works meta
const pageTitle = "ウェブデザイン";
const pageDesc =
  "メイド・イン・坂本パルコ。制作したウェブデザインをまとめたページ。何卒、よしなに。";
const ogpTitle = `${pageTitle} - ${siteTitle}`;
const ogpUrl = new URL("/web", siteUrl).toString();

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

export default function worksWeb() {
  return (
    <>
      <Main etcOn={false} webOn={true} writeOn={false} />
    </>
  );
}
