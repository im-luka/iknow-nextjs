import styles from "./favorites-button.module.scss";
import { useFavorites } from "../../../context/favorites-context";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";

const FavoritesButton = ({ item }) => {
  const { isItemInFavorites, addItemToFavorites, removeItemFromFavorites } =
    useFavorites();

  const itemToFavoritesHandler = () => {
    if (isItemInFavorites(item.id)) {
      removeItemFromFavorites(item.id);
    } else {
      addItemToFavorites({ ...item });
    }
  };

  return (
    <>
      {!isItemInFavorites(item.id) ? (
        <span
          className={styles["favorites-button"]}
          onClick={itemToFavoritesHandler}
        >
          <BsSuitHeart
            className={styles["heart-lower"]}
            color="red"
            size="2.5rem"
          />
          Add to Favs
        </span>
      ) : (
        <span
          className={styles["favorites-button"]}
          onClick={itemToFavoritesHandler}
        >
          <BsSuitHeartFill
            className={styles["heart-bigger"]}
            color="red"
            size="2.5rem"
          />
          Remove from Favs
        </span>
      )}
    </>
  );
};

export default FavoritesButton;
