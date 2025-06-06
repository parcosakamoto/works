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
    href: "https://parco-sakamoto-profile.vercel.app",
    navTitle: "PROFILE",
  },
  {
    id: 2,
    href: "https://parco-sakamoto-works.vercel.app/",
    navTitle: "PORTFOLIO",
  },
  {
    id: 3,
    href: "https://parco.chobi.net/kaerimasu/diary.html",
    navTitle: "日々雑記",
  },
  {
    id: 5,
    href: "https://parco.chobi.net/kaerimasu/contact.html",
    navTitle: "CONTACT",
  },
];
export default function Nav() {
  return (
    <nav>
      <ul className={`${styles.gNav} ${economica.variable}`}>
        {navLeftList.map(({ href, navTitle, id }) => (
          <li key={id}>
            {href.startsWith("http") ? (
              <a href={href} target="_self" rel="noopener noreferrer">
                {navTitle}
              </a>
            ) : (
              <Link href={href}>{navTitle}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
