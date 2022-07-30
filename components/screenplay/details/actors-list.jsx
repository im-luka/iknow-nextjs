import { screenplayApiConfig } from "../../../api/apiConfig";
import styles from "./actors-list.module.scss";

const ActorsList = ({ actors }) => {
  return (
    <div className={styles.actors}>
      <h3>Actors</h3>
      <div className={styles.actors__container}>
        {actors?.map((actor) => (
          <div className={styles.actors__container__item} key={actor.id}>
            <div
              className={styles.actors__container__item__image}
              style={{
                backgroundImage: `url(${screenplayApiConfig.posterImage(
                  actor.profile_path
                )})`,
              }}
            ></div>
            <p>{actor.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActorsList;
