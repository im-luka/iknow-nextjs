import ScreenplayLayout from "../../components/layout/screenplay-layout";
import Faq from "../../components/screenplay/home/faq";
import Features from "../../components/screenplay/home/features";
import Hero from "../../components/screenplay/home/hero";
import Recommendations from "../../components/screenplay/home/recommendations";

const ScreenplayPage = () => {
  return (
    <ScreenplayLayout>
      <Hero />
      <Features />
      <Recommendations />
      <Faq />
    </ScreenplayLayout>
  );
};

export default ScreenplayPage;
