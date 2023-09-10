/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import {
  filterByGenre,
  filterByOrigin,
  filterByOrder,
  filterByRating,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

import styles from "./NavBar.module.css";

const NavBar = ({ paginate, videogames }) => {
  const genres = useSelector((state) => state.genres);
  const dispatch = useDispatch();

  // HANDLERS PARA LOS FILTROS

  const handleFilterOrigin = (event) => {
    dispatch(filterByOrigin(event.target.value));
  };
  const handleFilterGenres = (event) => {
    event.preventDefault();
    dispatch(filterByGenre(event.target.value));
  };
  const handleFilterByOrder = (event) => {
    event.preventDefault();
    dispatch(filterByOrder(event.target.value));
  };
  const handleFilterByRating = (event) => {
    event.preventDefault();
    dispatch(filterByRating(event.target.value));
  };

  return (
    <>
      <div className={styles.container}>
        <Link to="/">
          <button className={styles.buttonLink}>LOGOUT</button>
        </Link>
        <Link to="/create">
          <button className={styles.buttonLink}>CREATE YOUR VIDEOGAME</button>
        </Link>
        <Link to="/about">
          <button className={styles.buttonLink}>ABOUT</button>
        </Link>
        <div>
          <div className={styles.searchbar}>
            <SearchBar paginate={paginate} videogames={videogames} />
          </div>

          <select
            className={styles.select}
            name=""
            defaultValue="0"
            id="orderByOrigin"
            onChange={(event) => handleFilterOrigin(event)}>
            <option disabled value="0">
              Filter by Origin
            </option>
            <option value="all">All videogames</option>
            <option value="db">Created videogames </option>
            <option value="api">API videogames</option>
          </select>

          <select
            className={styles.select}
            defaultValue="0"
            id="filterByGenre"
            onChange={handleFilterGenres}>
            <option disabled value="0">
              Filter by genres
            </option>

            {genres.map((game, index) => (
              <option key={index} value={game}>
                {game}
              </option>
            ))}
          </select>

          <select className={styles.select} defaultValue="0" id="orderByName">
            <option
              disabled
              value="0"
              onChange={(event) => handleFilterByOrder(event)}>
              Order by name
            </option>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
          </select>

          <select
            className={styles.select}
            defaultValue="0"
            id="orderByRating"
            onChange={(event) => handleFilterByRating(event)}>
            <option disabled value="0">
              Order by rating
            </option>
            <option value="9-1">Highest to lowest</option>
            <option value="1-9">Lowest to highest</option>
          </select>
        </div>
        <div>
          <button
            className={styles.buttonLink}
            onClick={() => {
              window.location.reload();
            }}>
            RESET ALL
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
