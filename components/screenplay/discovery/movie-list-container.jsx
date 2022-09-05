import { useEffect } from "react";
import { useRef } from "react";
import MovieList from "./movie-list";
import styles from "./movie-list-container.module.scss";

const MovieListContainer = ({ title, category, type, id }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (containerRef.current) {
        containerRef.current?.classList.add(styles.active);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={containerRef} className={styles["ml-container"]}>
      <h2>{title}</h2>

      <MovieList category={category} type={type} id={id} />
    </div>
  );
};

export default MovieListContainer;
