import { useState, useRef, useEffect } from "react";
import styles from "./category-container.module.scss";
import years from "../../../data/years";
import MovieListItem from "../discovery/movie-list-item";
import { screenplayApiConfig } from "../../../api/apiConfig";
import { screenplayAxiosClient } from "../../../api/axiosClient";
import { screenplayApiCalls } from "../../../api/requestsApi";
import { useRouter } from "next/router";
import { Category, MovieType, TvType } from "../../../models/screenplay";
import Loading from "../../loading/loading";

const CategoryContainer = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loadMore, setLoadMore] = useState(true);
  const [latestRequest, setLatestRequest] = useState();

  const searchRef = useRef(null);
  const yearRef = useRef(null);
  const adultRef = useRef(null);
  const {
    query: { category },
  } = useRouter();

  console.log(page);

  useEffect(() => {
    setIsLoading(true);
    setPage(1);
    setLoadMore(true);

    const sendRequest = async () => {
      try {
        let request;
        if (category === "movie") {
          request = screenplayApiCalls.getMovies(MovieType.TopRated, {
            params: {},
          });
        } else {
          request = screenplayApiCalls.getTvShows(TvType.Popular, {
            params: {},
          });
        }

        setLatestRequest(request);
        const response = await screenplayAxiosClient.get(
          request.url,
          request.params
        );

        setMovies(response.data.results.slice(0, 20));
        setTotalPages(response.data.total_pages);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };

    sendRequest();
  }, [category]);

  const genresHandler = (movieType, tvType) => {
    setPage(1);
    setLoadMore(true);

    const sendRequest = async () => {
      let request;
      if (category === "movie") {
        request = screenplayApiCalls.getMovies(movieType, { params: {} });
      } else {
        request = screenplayApiCalls.getTvShows(tvType, { params: {} });
      }

      setLatestRequest(request);
      const response = await screenplayAxiosClient.get(
        request.url,
        request.params
      );

      setMovies(response.data.results.slice(0, 20));
    };

    sendRequest();
  };

  const searchHandler = () => {
    setLoadMore(false);
    const searchValue = searchRef.current.value;
    const yearValue = yearRef.current.value;
    const includeAdultValue = adultRef.current.checked;

    const sendRequest = async () => {
      let request;
      try {
        if (category === "movie") {
          if (searchValue) {
            request = screenplayApiCalls.getSearch(Category.Movie, {
              params: {
                query: searchValue,
                primary_release_year: +yearValue,
                include_adult: includeAdultValue,
              },
            });
          } else {
            request = screenplayApiCalls.getDiscover(Category.Movie, {
              params: {
                primary_release_year: +yearValue,
                include_adult: includeAdultValue,
              },
            });
          }
        } else {
          if (searchValue) {
            request = screenplayApiCalls.getSearch(Category.Tv, {
              params: {
                query: searchValue,
                first_air_date_year: +yearValue,
                include_adult: includeAdultValue,
              },
            });
          } else {
            request = screenplayApiCalls.getDiscover(Category.Tv, {
              params: { first_air_date_year: +yearValue },
            });
          }
        }

        setLatestRequest(request);
        const response = await screenplayAxiosClient.get(
          request.url,
          request.params
        );

        setMovies(response.data.results.slice(0, 20));
      } catch (error) {}
    };

    sendRequest();
  };

  const loadMoreHandler = () => {
    const sendRequest = async () => {
      const response = await screenplayAxiosClient.get(latestRequest.url, {
        params: { page: page + 1 },
      });

      setMovies((prevstate) => [
        ...prevstate,
        ...response.data.results.slice(0, 20),
      ]);
    };

    sendRequest();
    setPage((prevstate) => prevstate + 1);
  };

  if (isLoading) {
    return (
      <div className={styles.nocontent}>
        <Loading />
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      <div className={styles.grid__header}>
        <h2>Want To Find Something Specific?</h2>

        <div className={styles.grid__header__genres}>
          <div className={styles.grid__header__genres__actions}>
            <button
              className="button button-alternate"
              onClick={genresHandler.bind(
                null,
                MovieType.TopRated,
                TvType.TopRated
              )}
            >
              Top Rated
            </button>
            <button
              className="button button-alternate"
              onClick={genresHandler.bind(
                null,
                MovieType.Popular,
                TvType.Popular
              )}
            >
              Popular
            </button>
            <button
              className="button button-alternate"
              onClick={genresHandler.bind(
                null,
                MovieType.Upcoming,
                TvType.OnTheAir
              )}
            >
              Upcoming
            </button>
          </div>
        </div>

        <div className={styles.grid__header__search}>
          <input ref={searchRef} type="text" placeholder="search..." />
        </div>

        <div className={styles.grid__header__filter}>
          <div className={styles.grid__header__filter__year}>
            <label htmlFor="year">Year : </label>
            <select ref={yearRef} id="year">
              <option value="">-- Select --</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.grid__header__filter__adult}>
            <input ref={adultRef} type="checkbox" id="adult" />
            <label htmlFor="adult">Include adult {category}s</label>
          </div>

          <div className={styles.grid__header__filter__action}>
            <button className="button button-primary" onClick={searchHandler}>
              Search
            </button>
          </div>
        </div>
      </div>

      {movies.length === 0 && (
        <div className={styles.nocontent}>
          <h2>No content.</h2>
        </div>
      )}
      <div className={styles.grid__container}>
        {movies.map((movie, index) => (
          <MovieListItem key={index} movie={movie} category={category} />
        ))}
      </div>

      {page < totalPages && loadMore && (
        <div className={styles.grid__more}>
          <button className="button button-secondary" onClick={loadMoreHandler}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryContainer;
