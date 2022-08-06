import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import styles from "./circle-menu.module.scss";
import CloseButton from "../screenplay/utils/close-button";
import { SiStarz } from "react-icons/si";
import { FaMusic, FaPlay } from "react-icons/fa";

const Menu = ({ onClose }) => {
  const menuRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      menuRef.current.classList.add(styles.active);
    }, 1);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const navigationHandler = (route) => {
    router.replace(route);
    onClose();
  };

  return (
    <div ref={menuRef} className={`${styles.menu}`}>
      <CloseButton onClick={onClose} />

      <nav className={styles.nav}>
        <div className={styles.nav__main}>
          <div
            className={styles.nav__main__item}
            onClick={navigationHandler.bind(null, "/")}
          >
            Home Page
          </div>

          <div
            className={styles.nav__main__item}
            onClick={navigationHandler.bind(null, "/music")}
          >
            Music Page
          </div>

          <div
            className={styles.nav__main__item}
            onClick={navigationHandler.bind(null, "/screenplay")}
          >
            Movies & TV Shows Page
          </div>
        </div>

        <div className={styles.nav__icons}>
          <div
            className={styles.nav__icons__item}
            onClick={navigationHandler.bind(null, "/music/play")}
          >
            <FaMusic />
            Play Music
          </div>

          <div
            className={styles.nav__icons__item}
            onClick={navigationHandler.bind(null, "/screenplay/discovery")}
          >
            <FaPlay />
            Watch Movies
          </div>
        </div>
      </nav>
    </div>
  );
};

const CircleMenu = ({ isMenu, inCorner }) => {
  const [showMenu, setShowMenu] = useState(false);

  if (showMenu) {
    return <Menu onClose={() => setShowMenu(false)} />;
  }

  return (
    <div
      className={`${styles.circle} ${inCorner ? styles.low : ""}`}
      onClick={() => {
        if (isMenu) {
          setShowMenu(true);
        }
      }}
    >
      <div className={styles.circle__container}>
        <svg viewBox="0 0 100 100" width="100" height="100">
          <defs>
            <path
              id="circle"
              d="
                M 50, 50
                m-37, 0
                a 37,37 0 1,1 74,0
                a 37,37 0 1,1 -74,0"
            />
          </defs>
          <text fontSize="16">
            <textPath xlinkHref="#circle">
              We are the best f*ck the rest
            </textPath>
          </text>
        </svg>
      </div>

      <div className={styles.circle__container__content}>
        <SiStarz />
      </div>
    </div>
  );
};

export default CircleMenu;
