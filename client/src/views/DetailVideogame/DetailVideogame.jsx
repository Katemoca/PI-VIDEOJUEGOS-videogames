import {
  getVideogameByDetail,
  deleteDetailVideogame,
  getAllVideogames,
} from "../../redux/actions";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import loading from "../../assets/loading/loading6.gif";
import styles from "./DetailVideogame.module.css";
import { useEffect } from "react";

const DetailVideogame = () => {
  const { detailId } = useParams();
  const detail = useSelector((state) => state.videogameDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideogameByDetail(detailId));
  }, [dispatch, detailId]);

  const handleDelete = () => {
    dispatch(deleteDetailVideogame(detailId));
    dispatch(getAllVideogames());
  };

  return (
    <>
      <div className={styles.main_container}>
        <Link to="/home">
          <button className={styles.button}>Home</button>
        </Link>
        <Link to="/create">
          <button className={styles.button}>Create your videogame</button>
        </Link>
      </div>
      {detail.name ? (
        <div className={styles.container_detail}>
          {detail.createdVideoGame === true ? (
            <Link to="/home">
              <button className={styles.button_delete} onClick={handleDelete}>
                {" "}
                DELETE GAME
              </button>
            </Link>
          ) : (
            <p className={styles.message}>{`You can't delete this game`}.</p>
          )}
          <h2>{detail.name}</h2>
          <img
            src={detail.background_image}
            className={styles.image}
            alt={detail.name}
          />
          <div className={styles.text_full_detail}>
            <p>
              <strong>Id: </strong>
              {detail.id}
            </p>
            <p>
              <strong>Platforms: </strong>
              {detail.platforms.join(", ")}
            </p>
            <p>
              <strong>Release Date: </strong>
              {detail.released}
            </p>
            <p>
              <strong>Rating: </strong>
              {detail.rating}
            </p>
            <p>
              <strong>Genres: </strong>
              {detail.genres.join(", ")}
            </p>
            <p>
              <strong>Description: </strong>
              {detail.description.replace(/<[^>]+>/g, "")}
            </p>
          </div>
        </div>
      ) : (
        <div className={styles.loadingContainer}>
          <img src={loading} alt="loading" className={styles.loadingImg} />
          <p className={styles.loadingText}>Loading ...</p>
        </div>
      )}
    </>
  );
};

export default DetailVideogame;
