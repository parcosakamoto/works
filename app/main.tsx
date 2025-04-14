"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "styles/main.module.scss";
// 不要になったインポートを削除
// import WorkPosts from "./workposts";
// import WorkPostsWeb from "app/web/workpostsweb";
// import WorkPostsWrite from "app/write/workpostswrite";
// import WorkPostsEtc from "app/etc/workpostsetc";
import Heading from "./heading";
import Pagination from "./pagination";
import WorkPost from "./workpost"; // WorkPost をインポート（名前を WorkPost に統一）
import { useState } from "react";

const titlejp = "ポートフォリオ";
const titleen = "portfolio";

const navItems = [
  {
    id: 1,
    href: "/",
    navTitle: "全て",
    categoryKey: "all", // カテゴリ識別のためのキーを追加
  },
  {
    id: 2,
    href: "/web/",
    navTitle: "WEB",
    categoryKey: "web", // カテゴリ識別のためのキーを追加
  },
  {
    id: 3,
    href: "/write/",
    navTitle: "Writting",
    categoryKey: "write", // カテゴリ識別のためのキーを追加（対応するタグが worksItems に必要）
  },
  {
    id: 4,
    href: "/etc/",
    navTitle: "その他制作物",
    categoryKey: "etc", // カテゴリ識別のためのキーを追加（対応するタグが worksItems に必要）
  },
];

// Props 型定義は不要になったため削除
// type Props = {
//   etcOn: boolean;
//   webOn: boolean;
//   writeOn: boolean;
// };

// export default function Main({ etcOn, webOn, writeOn }: Props) { // Props を削除
export default function Main() {
  const pathname = usePathname();

  // pathname から現在のアクティブカテゴリを決定
  const currentNavItem = navItems.find((item) => item.href === pathname);
  // 見つからない場合やルートパスの場合は 'all' とする
  const activeCategory = currentNavItem ? currentNavItem.categoryKey : "all";

  // 不要になった determineWorkPostsComponent 関数を削除
  // const determineWorkPostsComponent = () => { ... };

  return (
    <main id="containers">
      <div className={styles.container}>
        <Heading titlejp={titlejp} titleen={titleen} />
        <nav className={styles.categoryLink}>
          <ul>
            {navItems.map(({ href, navTitle, id }) => (
              <li key={id}>
                <Link
                  href={href}
                  className={pathname === href ? "current" : "non-current"}
                >
                  {navTitle}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* WorkPostにアクティブなカテゴリを渡す */}
        <WorkPost activeCategory={activeCategory} />
        <Pagination />
      </div>
    </main>
  );
}
