"use client";
// usePathname は、初期表示のカテゴリ決定などに使う場合を除き、
// このフィルタリングロジック自体には不要になる可能性があります。
// import { usePathname } from "next/navigation";
import Link from "next/link"; // Link は他の場所で使うかもしれませんが、ナビゲーション自体には不要になるかも
import styles from "styles/main.module.scss";
import Heading from "./heading";
import Pagination from "./pagination";
import WorkPost from "./workpost";
import { useState, useEffect } from "react"; // useEffect を追加 (初期表示用など)

const titlejp = "ポートフォリオ";
const titleen = "portfolio";

const navItems = [
  {
    id: 1,
    // href: "/", // URL遷移させない場合は href は不要になる
    navTitle: "全て",
    categoryKey: "all",
  },
  {
    id: 2,
    // href: "/web/",
    navTitle: "WEB",
    categoryKey: "web",
  },
  {
    id: 3,
    // href: "/write/",
    navTitle: "Writting",
    categoryKey: "write",
  },
  {
    id: 4,
    // href: "/etc/",
    navTitle: "その他制作物",
    categoryKey: "etc",
  },
];

export default function Main() {
  // 選択されているカテゴリを管理する状態
  const [selectedCategory, setSelectedCategory] = useState<string>("all"); // 初期値は 'all'

  // カテゴリクリック時の処理
  const handleCategorySelect = (categoryKey: string) => {
    setSelectedCategory(categoryKey);
  };

  // --- オプション ---
  // もしページロード時のURLに基づいて初期カテゴリを設定したい場合
  // import { usePathname } from "next/navigation"; // 必要ならコメント解除
  // const pathname = usePathname();
  // useEffect(() => {
  //   const currentNavItem = navItems.find(item => item.href === pathname); // href が navItems に必要
  //   const initialCategory = currentNavItem ? currentNavItem.categoryKey : 'all';
  //   setSelectedCategory(initialCategory);
  // }, [pathname]); // pathname が変わった時（初回ロード時など）に実行
  // ---------------

  return (
    <main id="containers">
      <div className={styles.container}>
        <Heading titlejp={titlejp} titleen={titleen} />
        <nav className={styles.categoryLink}>
          <ul>
            {navItems.map(({ navTitle, id, categoryKey }) => (
              <li key={id}>
                {/* Link の代わりに button や span などを使う */}
                <button
                  onClick={() => handleCategorySelect(categoryKey)}
                  // 選択中のカテゴリにスタイルを適用
                  className={
                    selectedCategory === categoryKey ? "current" : "non-current"
                  }
                  aria-pressed={selectedCategory === categoryKey} // アクセシビリティ向上
                >
                  {navTitle}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* WorkPost には状態変数を渡す */}
        <WorkPost activeCategory={selectedCategory} />
        <Pagination />
      </div>
    </main>
  );
}
