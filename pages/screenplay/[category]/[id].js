import { Container } from "react-bootstrap";
import { screenplayAxiosClient } from "../../../api/axiosClient";
import { screenplayApiCalls } from "../../../api/requestsApi";
import ScreenplayLayout from "../../../components/layout/screenplay-layout";
import Loading from "../../../components/loading/loading";
import DetailsContainer from "../../../components/screenplay/details/details-container";
import InfoModalContainer from "../../../components/screenplay/modal/info-modal-container";

const DetailsPage = ({ data, actors, images }) => {
  if (!data) {
    <ScreenplayLayout>
      <Container style={{ height: "75vh" }}>
        <Loading />
      </Container>
    </ScreenplayLayout>;
  }

  return (
    <ScreenplayLayout>
      <DetailsContainer item={data} actors={actors} images={images} />

      <InfoModalContainer />
    </ScreenplayLayout>
  );
};

export const getServerSideProps = async (context) => {
  const { category, id } = context.params;

  const requestDetails = screenplayApiCalls.getDetails(category, id, {
    params: {},
  });
  const responseDetails = await screenplayAxiosClient.get(
    requestDetails.url,
    requestDetails.params
  );
  const itemDetails = responseDetails.data;

  const requestActors = screenplayApiCalls.getCredits(category, id, {
    params: {},
  });
  const responseActors = await screenplayAxiosClient.get(
    requestActors.url,
    requestActors.params
  );
  const actors = responseActors.data.cast.slice(0, 5);

  const requestImages = screenplayApiCalls.getImages(category, id, {
    params: {},
  });
  const responseImages = await screenplayAxiosClient.get(
    requestImages.url,
    requestImages.params
  );
  const images = responseImages.data.backdrops.slice(0, 10);

  return {
    props: { data: itemDetails, actors, images },
  };
};

export default DetailsPage;
