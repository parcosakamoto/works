import Link from "next/link";
import Image from "next/image";
//import imageLoader from "lib/imageLoader";
import styles from "styles/works.module.scss";

export default function Warticle({
  title,
  url,
  eyecatch,
  link,
}: {
  title: string;
  url: string;
  eyecatch: any;
  link: string;
}) {
  return (
    <article>
      {url && (
        <Link href={url} target={link}>
          <div className={styles.thumb}>
            <Image
              src={eyecatch}
              alt=""
              //sizes="(max-width: 599px) 50vw, 33vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              priority
              //placeholder="blur"
              width={500}
              height={500}
            />
          </div>
          <h2>{title}</h2>
        </Link>
      )}
      {!url && (
        <>
          <div className={styles.thumb}>
            <Image
              src={eyecatch}
              alt=""
              //sizes="(min-width:1152px) 576px,(min-width:768px) 50vw, 100vw)"
              style={{
                width: "100%",
                height: "auto",
              }}
              priority
              //placeholder="blur"
              width={500}
              height={500}
            />
          </div>
          <h2>{title}</h2>
        </>
      )}
    </article>
  );
}
