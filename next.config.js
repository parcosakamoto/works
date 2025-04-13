// next.config.js

import withExportImages from "next-export-optimize-images";

/** @type {import('next').NextConfig} */
const config = withExportImages({
  trailingSlash: true,
  // 必要であれば他の Next.js 設定をここに追加
});

export default config;
