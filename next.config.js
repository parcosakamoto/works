/** @type {import('next').NextConfig} */
const nextConfig = {
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
    // 画像の最大サイズ（ピクセル単位）
    maxSize: 600,
  },
});
