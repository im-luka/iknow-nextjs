import { useRouter } from "next/router";
import ErrorContent from "../../../components/error/error-content";
import ScreenplayLayout from "../../../components/layout/screenplay-layout";
import CategoryContainer from "../../../components/screenplay/category/category-container";
import InfoModalContainer from "../../../components/screenplay/modal/info-modal-container";

const CategoryPage = () => {
  const {
    query: { category },
  } = useRouter();

  if (category !== "movie" && category !== "tv") {
    return <ErrorContent />;
  }

  return (
    <ScreenplayLayout>
      <CategoryContainer />

      <InfoModalContainer />
    </ScreenplayLayout>
  );
};

export default CategoryPage;
