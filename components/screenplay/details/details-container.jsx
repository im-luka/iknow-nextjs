import styles from "./details-container.module.scss";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
import DetailsCover from "./details-cover";
import MovieListContainer from "../discovery/movie-list-container";
import Delayed from "../utils/delayed";
import { MovieType } from "../../../models/screenplay";

const DetailsContainer = ({ item, actors, images }) => {
  const {
    query: { category, id },
  } = useRouter();

  return (
    <>
      <DetailsCover item={item} actors={actors} images={images} />

      <Container className={styles.container} fluid>
        <Delayed waitBeforeShow={500}>
          <MovieListContainer
            title="You might be interested"
            category={category}
            type={MovieType.Similar}
            id={id}
          />
        </Delayed>
      </Container>
    </>
  );
};

export default DetailsContainer;
