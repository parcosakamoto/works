import styles from "styles/footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import sns from "images/x.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.sns}>
        <Link href="https://twitter.com/" target="_blank">
          <Image
            src={sns}
            alt="坂本パルコのx"
            sizes="20px"
            priority
            //placeholder="blur"
            width={20}
            height={20}
          />
        </Link>
      </nav>

      <p className={styles.copy}>©parco sakamoto.</p>
    </footer>
  );
}
