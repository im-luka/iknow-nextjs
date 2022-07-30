import MovieList from "./movie-list";
import styles from "./movie-list-container.module.scss";

const MovieListContainer = ({ title, category, type, id }) => {
  return (
    <div className={styles["ml-container"]}>
      <h2>{title}</h2>

      <MovieList category={category} type={type} id={id} />
    </div>
  );
};

export default MovieListContainer;
