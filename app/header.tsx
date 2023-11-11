"use client";
import styles from "styles/header.module.scss";
import Link from "next/link";

import { useState } from "react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
    document.body.classList.toggle("header-nav-open");
  };
  const logo = (
    <picture>
      <source
        media="(max-width:833px)"
        srcSet="/logo_w.png"
        width="64"
        height="60"
      />
      <img src="/logo.png" alt="坂本パルコ" width="32" height="200" />
    </picture>
  );
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="https://parco.chobi.net/">{logo}</Link>
      </div>
      <button
        onClick={handleMenuOpen}
        type="button"
        className={openMenu ? "is-open" : "menu-close"}
      >
        <span></span>
        <span></span>
      </button>
    </header>
  );
}
