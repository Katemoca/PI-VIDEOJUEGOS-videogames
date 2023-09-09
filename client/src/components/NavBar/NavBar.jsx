/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = ({ currentPage, setCurrentPage, videogames }) => {
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
            <SearchBar
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              videogames={videogames}
            />
          </div>

          <select
            className={styles.select}
            name=""
            defaultValue="0"
            id="orderByOrigin">
            <option disabled value="0">
              Filter by Origin
            </option>
            <option value="all">All videogames</option>
            <option value="created">Created videogames </option>
            <option value="api">API videogames</option>
          </select>

          <select
            className={styles.select}
            name=""
            defaultValue="0"
            id="filterByGenre">
            <option disabled value="0">
              Filter by genres
            </option>
            <option>GÉNEROS</option>
          </select>

          <select
            className={styles.select}
            name=""
            defaultValue="0"
            id="orderByName">
            <option disabled value="0">
              Order by name
            </option>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
          </select>

          <select
            className={styles.select}
            name=""
            defaultValue="0"
            id="orderByRating">
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
