/* eslint-disable react/prop-types */
import CardVideogame from "../CardVideogame/CardVideogame";
import styles from "./CardsContainerVideogame.module.css";

function CardsContainerVideogame({ videogames }) {
  return (
    <div className={styles.cardsmaincontainer}>
      <div className={styles.cardscontainer}>
        {videogames.map(({ name, genres, background_image, id, rating }) => {
          return (
            <CardVideogame
              key={id}
              background_image={background_image}
              name={name}
              genres={genres}
              id={id}
              rating={rating}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CardsContainerVideogame;
