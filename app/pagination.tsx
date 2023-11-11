"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "styles/pagination.module.scss";

const paginationList = [
  {
    id: 1,
    href: "/",
  },
];
export default function Pagination() {
  const pathname = usePathname();
  return (
    <div className={styles.pagination}>
      <ul>
        {paginationList.map(({ href, id }) => (
          <li key={id}>
            <Link
              href={href}
              className={pathname === href ? "current" : "non-current"}
            >
              {id}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
