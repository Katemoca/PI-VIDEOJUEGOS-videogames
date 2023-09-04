import NavBar from "../../components/NavBar/NavBar";
import CardsContainerVideogame from "../../components/CardsContainerVideogame/CardsContainerVideogame";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllVideogames } from "../../redux/actions";

import styles from "./Home.module.css";

function Home() {
  const videogames = useSelector((state) => state.videogames);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllVideogames());
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <div className={styles.homecontainer}>
        <div>
          <CardsContainerVideogame videogames={videogames} />
        </div>
      </div>
    </div>
  );
}

export default Home;
