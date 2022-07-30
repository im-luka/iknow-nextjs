import { createContext, useContext, useState } from "react";

const ModalInfoContext = createContext({
  item: {},
  isModalInfoShown: false,
  showModal: (item) => {},
  closeModal: () => {},
});

export const useModalInfo = () => {
  return useContext(ModalInfoContext);
};

export const ModalInfoContextProvider = ({ children }) => {
  const [item, setItem] = useState({});
  const [isModalInfoShown, setIsModalInfoShown] = useState(false);

  const showModal = (item) => {
    setIsModalInfoShown(true);
    setItem(item);
  };

  const closeModal = () => {
    setIsModalInfoShown(false);
  };

  return (
    <ModalInfoContext.Provider
      value={{
        item,
        isModalInfoShown,
        showModal,
        closeModal,
      }}
    >
      {children}
    </ModalInfoContext.Provider>
  );
};
