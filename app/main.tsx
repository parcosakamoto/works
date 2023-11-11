"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "styles/main.module.scss";
import WorkPosts from "./workposts";
import Heading from "./heading";
import Pagination from "./pagination";

const titlejp = "ポートフォリオ";
const titleen = "portfolio";

const navItems = [
  {
    id: 1,
    href: "/",
    navTitle: "全て",
  },
  {
    id: 2,
    href: "/kaerimasu/web.html",
    navTitle: "WEB",
  },
  {
    id: 3,
    href: "/kaerimasu/work.html",
    navTitle: "Writting",
  },
  {
    id: 4,
    href: "/kaerimasu/movie.html",
    navTitle: "その他制作物",
  },
];

export default function Main() {
  const pathname = usePathname();
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
        <WorkPosts />
        <Pagination />
      </div>
    </main>
  );
}
