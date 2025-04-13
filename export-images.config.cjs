// export-images.config.js (新規作成)

/** @type {import('next-export-optimize-images').Config} */
const config = {
  // 必要に応じてベースパス設定
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",

  // Sharp の詳細オプション (任意: 品質や速度を調整)
  sharpOptions: {
    webp: {
      quality: 80, // WebP 品質 (0-100)
      effort: 4, // 速度/圧縮率バランス (0:速い - 6:遅い/高圧縮)
    },
    avif: {
      quality: 80, // AVIF 品質 (0-100)
      effort: 4, // 速度/圧縮率バランス (0:速い - 9:遅い/高圧縮)
    },
  },

  // ここで変換ルールを指定
  convertFormat: [
    ["png", "webp"], // PNG を WebP に変換
    ["jpg", "avif"], // JPG (および JPEG) を AVIF に変換
  ],
};

module.exports = config;
