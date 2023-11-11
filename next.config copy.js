/** @type {import('next').NextConfig} */
const nextConfig = {
  //output: "export",
  trailingSlash: true,
};

const withExportImages = require("next-export-optimize-images");

module.exports = withExportImages({
  output: "export",
  optimizeImages: true,
  optimizationOptions: {
    // 画像の形式
    format: ["jpg", "png"],

    // 画像の品質（0 〜 100）
    quality: 90,

    maxSize: 600,
  },
  // write your next.js configuration values.
});
