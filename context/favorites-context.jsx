import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/use-local-storage";

const FavoritesContext = createContext({
  favorites: [],
  isFavoritesModalShown: false,
  isItemInFavorites: (id) => {},
  addItemToFavorites: (item) => {},
  removeItemFromFavorites: (id) => {},
  showFavorites: () => {},
  closeFavorites: () => {},
});

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  const [isFavoritesModalShown, setIsFavoritesModalShown] = useState(false);

  const showFavorites = () => {
    setIsFavoritesModalShown(true);
  };

  const closeFavorites = () => {
    setIsFavoritesModalShown(false);
  };

  const addItemToFavorites = (item) => {
    if (!favorites.some((fav) => fav.id === item.id)) {
      setFavorites((prevstate) => [...prevstate, item]);
    }
  };

  const removeItemFromFavorites = (id) => {
    setFavorites((prevstate) => prevstate.filter((fav) => fav.id !== id));
  };

  const isItemInFavorites = (id) => {
    return favorites.some((fav) => fav.id === id) ? true : false;
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        isFavoritesModalShown,
        addItemToFavorites,
        removeItemFromFavorites,
        isItemInFavorites,
        showFavorites,
        closeFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
