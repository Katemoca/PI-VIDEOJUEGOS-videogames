/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./CardVideogame.module.css";

const CardVideogame = ({ idVideogame, name, background_image, rating }) => {
  return (
    <>
      <Link className={styles.link} to={`/detail/${idVideogame}`}>
        <div className={styles.card}>
          <div className={styles.poster}>
            <img className={styles.image} src={background_image} alt={name} />
          </div>
          <div className={styles.details}>
            <div className={styles.box}>
              <h2 className={styles.name}>{name}</h2>
            </div>

            <h2>RATING: {rating}</h2>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CardVideogame;
