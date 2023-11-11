import Link from "next/link";
import styles from "styles/heading.module.scss";
import { Shippori_Mincho } from "next/font/google";

const ShipporiMincho = Shippori_Mincho({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-mincho",
  display: "swap",
});

export default function Heading({
  titlejp,
  titleen,
}: {
  titlejp: string;
  titleen: string;
}) {
  return (
    <h1 className={`${styles.heading} ${ShipporiMincho.variable}`}>
      <Link href="/">
        <span className={styles.jp}>{titlejp}</span>
        <span className={styles.en}>{titleen}</span>
      </Link>
    </h1>
  );
}
