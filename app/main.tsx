"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "styles/main.module.scss";
import WorkPosts from "./workposts";
import WorkPostsWeb from "app/web/workpostsweb";
import WorkPostsWrite from "app/write/workpostswrite";
import WorkPostsEtc from "app/etc/workpostsetc";
import Heading from "./heading";
import Pagination from "./pagination";
import WorksPost from "./workpost";
import { useState } from "react";

const titlejp = "ポートフォリオ";
const titleen = "portfolio";

const navItems = [
  {
    id: 1,
    href: "/works",
    navTitle: "全て",
  },
  {
    id: 2,
    href: "/web",
    navTitle: "WEB",
  },
  {
    id: 3,
    href: "/write",
    navTitle: "Writting",
  },
  {
    id: 4,
    href: "/etc",
    navTitle: "その他制作物",
  },
];

type Props = {
  etcOn: boolean;
  webOn: boolean;
  writeOn: boolean;
};

export default function Main({ etcOn, webOn, writeOn }: Props) {
  const pathname = usePathname();

  const determineWorkPostsComponent = () => {
    if (etcOn) {
      return <WorkPostsEtc />;
    } else if (webOn) {
      return <WorkPostsWeb />;
    } else if (writeOn) {
      return <WorkPostsWrite />;
    } else {
      return <WorkPosts />;
    }
  };

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

        {/* ここで条件に基づいたサブコンポーネントを表示 */}
        {/*determineWorkPostsComponent()*/}
        <WorksPost />
        <Pagination />
      </div>
    </main>
  );
}
