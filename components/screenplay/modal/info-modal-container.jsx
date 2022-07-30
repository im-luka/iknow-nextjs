import { useModalInfo } from "../../../context/modal-info-context";
import InfoModal from "./info-modal";

const InfoModalContainer = () => {
  const { isModalInfoShown } = useModalInfo();

  if (isModalInfoShown) {
    return <InfoModal />;
  }

  return;
};

export default InfoModalContainer;
