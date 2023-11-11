import { siteMeta } from "lib/constants";

const {
  siteTitle,
  siteDesc,
  siteUrl,
  //siteLang,
  siteLocale,
  siteType,
  siteIcon,
  siteFavi,
} = siteMeta;

import siteImg from "images/ogp.png";

export const baseMetadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "./",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  title: {
    template: "%s - ${siteTitle}",
    default: siteTitle,
  },
  description: siteDesc,
  icons: {
    icon: siteFavi,
    apple: siteIcon,
  },
};
//ogp
export const openGraphMetadata = {
  title: siteTitle,
  description: siteDesc,
  url: siteUrl,
  siteName: siteTitle,
  images: [
    {
      url: siteImg.src,
      width: siteImg.width,
      height: siteImg.height,
    },
  ],
  locale: siteLocale,
  type: siteType,
};

//twitter
export const twitterMetadata = {
  card: "summary_large_image",
  title: siteTitle,
  description: siteDesc,
  images: [siteImg.src],
};
