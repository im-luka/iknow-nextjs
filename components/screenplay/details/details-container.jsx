import styles from "./details-container.module.scss";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
import DetailsCover from "./details-cover";
import MovieListContainer from "../discovery/movie-list-container";
import { MovieType } from "../../../models/screenplay";

const DetailsContainer = ({ item, actors, images }) => {
  const {
    query: { category, id },
  } = useRouter();

  return (
    <>
      <DetailsCover item={item} actors={actors} images={images} />

      <Container className={styles.container} fluid>
        <MovieListContainer
          title="You might be interested"
          category={category}
          type={MovieType.Similar}
          id={id}
        />
      </Container>
    </>
  );
};

export default DetailsContainer;
