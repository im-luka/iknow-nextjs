import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const [shouldShrink, setShouldShrink] = useState(false);

  useEffect(() => {
    const resizeNavbar = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        setShouldShrink(true);
      } else {
        setShouldShrink(false);
      }
    };

    window.addEventListener("scroll", resizeNavbar);

    return () => {
      window.removeEventListener("scroll", resizeNavbar);
    };
  }, []);

  return (
    <header className={`${styles.header} ${shouldShrink ? styles.shrink : ""}`}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/">
            <h1>iKNOW</h1>
          </Link>
        </div>

        <ul className={styles.navbar__list}>
          <li>
            <Link href="#music">Music</Link>
          </li>
          <li>
            <Link href="#screenplay">Movies & TV Shows</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
