import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { screenplayApiConfig } from "../../../api/apiConfig";
import { screenplayAxiosClient } from "../../../api/axiosClient";
import CloseButton from "../utils/close-button";
import styles from "./navbar-search.module.scss";
import { screenplayApiCalls } from "../../../api/requestsApi";
import { Category } from "../../../models/screenplay";
import Loading from "../../loading/loading";
import { useDebounce } from "use-debounce";

const NavbarSearch = () => {
  const [showResults, setShowResults] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);
  const resultsRef = useRef(null);
  const router = useRouter();

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const sendRequest = async () => {
      setLoading(true);

      try {
        const request = screenplayApiCalls.getSearch(Category.Movie, {
          params: { query: debouncedSearchQuery },
        });
        const response = await screenplayAxiosClient.get(
          request.url,
          request.params
        );

        setMovies(
          response.data.results
            .filter(
              (elem) =>
                elem.release_date &&
                (elem.poster_path || elem.backdrop_path) &&
                elem.genre_ids.length > 0
            )
            .slice(0, 5)
        );
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    sendRequest();
  }, [debouncedSearchQuery]);

  useEffect(() => {
    const addAnimationContainer = setTimeout(() => {
      if (resultsRef.current) {
        resultsRef.current.classList.add(styles.active);
      }
    }, 1);

    return () => {
      clearTimeout(addAnimationContainer);
    };
  }, [showResults]);

  if (loading) {
    return (
      <div className={styles["navbar-search"]}>
        <input
          type="text"
          placeholder="search movies..."
          onFocus={() => setShowResults(true)}
          onChange={(event) => setSearchQuery(event.target.value)}
          value={searchQuery}
        />

        {showResults && (
          <div ref={resultsRef} className={styles["navbar-search__results"]}>
            <Loading />

            <CloseButton onClick={() => setShowResults(false)} />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={styles["navbar-search"]}>
      <input
        type="text"
        placeholder="search movies..."
        onFocus={() => setShowResults(true)}
        onChange={(event) => setSearchQuery(event.target.value)}
        value={searchQuery}
      />

      {showResults && (
        <div ref={resultsRef} className={styles["navbar-search__results"]}>
          {loading ? (
            <Loading />
          ) : (
            movies.map((movie) => (
              <div
                key={movie.id}
                className={styles["navbar-search__results__item"]}
              >
                <div className={styles["navbar-search__results__item__image"]}>
                  <img
                    src={
                      movie.backdrop_path
                        ? screenplayApiConfig.coverImage(movie.backdrop_path)
                        : screenplayApiConfig.posterImage(movie.poster_path)
                    }
                    alt={movie.title}
                  />
                </div>

                <div className={styles["navbar-search__results__item__title"]}>
                  <h3>{movie.title}</h3>
                </div>

                <div className={styles["navbar-search__results__item__action"]}>
                  <button
                    className="button button-primary"
                    onClick={() => {
                      router.push(`/screenplay/movie/${movie.id}`);
                      setShowResults(false);
                      setSearchQuery("");
                    }}
                  >
                    Watch
                  </button>
                </div>
              </div>
            ))
          )}

          <CloseButton onClick={() => setShowResults(false)} />
        </div>
      )}
    </div>
  );
};

export default NavbarSearch;
