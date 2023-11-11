"use client";
import { usePathname } from "next/navigation";
import styles from "styles/nav.module.scss";
import Link from "next/link";
import { Economica } from "next/font/google";

const economica = Economica({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-economica",
  display: "swap",
});

const navLeftList = [
  {
    id: 0,
    href: "https://parco.chobi.net/",
    navTitle: "新潟の、実家に帰ります",
  },
  {
    id: 1,
    href: "/kaerimasu/profile.html",
    navTitle: "PROFILE",
  },
  {
    id: 2,
    href: "/works/index.html",
    navTitle: "PORTFOLIO",
  },
  {
    id: 3,
    href: "/niigataparco.html",
    navTitle: "NIIGATA PARCO",
  },
  {
    id: 4,
    href: "/kaerimasu/diary.html",
    navTitle: "日々雑記",
  },
  {
    id: 5,
    href: "/kaerimasu/contact.html",
    navTitle: "CONTACT",
  },
];
export default function Nav() {
  return (
    <nav>
      <ul className={`${styles.gNav} ${economica.variable}`}>
        {navLeftList.map(({ href, navTitle, id }) => (
          <li key={id}>
            <Link href={href}>{navTitle}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
