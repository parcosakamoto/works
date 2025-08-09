// next.config.js

import withExportImages from "next-export-optimize-images";

/** @type {import('next').NextConfig} */
const config = withExportImages({
  trailingSlash: true,
  //output: "export", // Static export を有効化
  // 必要であれば他の Next.js 設定をここに追加
  images: {
    loader: "default",
  },
});

export default config;
