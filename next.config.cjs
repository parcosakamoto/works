// next.config.js

const withExportImages = require("next-export-optimize-images");

/** @type {import('next').NextConfig} */
const config = withExportImages({
  trailingSlash: true,
  // output: "export", // この行を削除
  // 必要であれば他の Next.js 設定をここに追加
});

module.exports = config;
