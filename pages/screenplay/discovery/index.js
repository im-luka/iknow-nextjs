import { Container } from "react-bootstrap";
import ScreenplayLayout from "../../../components/layout/screenplay-layout";
import HeroSlide from "../../../components/screenplay/discovery/hero-slide";
import MovieListContainer from "../../../components/screenplay/discovery/movie-list-container";
import InfoModalContainer from "../../../components/screenplay/modal/info-modal-container";
import { Category, MovieType, TvType } from "../../../models/screenplay";

const DiscoveryPage = () => {
  return (
    <ScreenplayLayout>
      <HeroSlide />

      <Container>
        <MovieListContainer
          title="Trending Movies"
          category={Category.Movie}
          type={MovieType.Popular}
        />

        <MovieListContainer
          title="Trending TV Shows"
          category={Category.Tv}
          type={TvType.Popular}
        />

        <MovieListContainer
          title="Upcoming Movies"
          category={Category.Movie}
          type={MovieType.Upcoming}
        />

        <MovieListContainer
          title="Top Rated TV Shows"
          category={Category.Tv}
          type={TvType.TopRated}
        />
      </Container>

      <InfoModalContainer />
    </ScreenplayLayout>
  );
};

export default DiscoveryPage;
