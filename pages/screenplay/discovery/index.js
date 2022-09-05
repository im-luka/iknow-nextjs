import { Container } from "react-bootstrap";
import ScreenplayLayout from "../../../components/layout/screenplay-layout";
import HeroSlide from "../../../components/screenplay/discovery/hero-slide";
import MovieListContainer from "../../../components/screenplay/discovery/movie-list-container";
import InfoModalContainer from "../../../components/screenplay/modal/info-modal-container";
import Delayed from "../../../components/screenplay/utils/delayed";
import { Category, MovieType, TvType } from "../../../models/screenplay";

const DiscoveryPage = () => {
  return (
    <ScreenplayLayout>
      <HeroSlide />

      <Container>
        <Delayed waitBeforeShow={500}>
          <MovieListContainer
            title="Trending Movies"
            category={Category.Movie}
            type={MovieType.Popular}
          />
        </Delayed>

        <Delayed waitBeforeShow={1000}>
          <MovieListContainer
            title="Trending TV Shows"
            category={Category.Tv}
            type={TvType.Popular}
          />
        </Delayed>

        <Delayed waitBeforeShow={1500}>
          <MovieListContainer
            title="Upcoming Movies"
            category={Category.Movie}
            type={MovieType.Upcoming}
          />
        </Delayed>

        <Delayed waitBeforeShow={2000}>
          <MovieListContainer
            title="Top Rated TV Shows"
            category={Category.Tv}
            type={TvType.TopRated}
          />
        </Delayed>
      </Container>

      <InfoModalContainer />
    </ScreenplayLayout>
  );
};

export default DiscoveryPage;
