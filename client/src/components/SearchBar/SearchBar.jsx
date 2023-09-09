/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { searchByName } from "../../redux/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";

import styles from "./SearchaBar.module.css";

const SearchBar = ({ currentPage, setCurrentPage, videogames }) => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleClickButton = (event) => {
    event.preventDefault();
    dispatch(searchByName(name));
    setName("");
    setCurrentPage(1);

    console.log(`Number of search results: ${videogames.length}`);
  };

  return (
    <>
      <input
        className={styles.input}
        type="text"
        placeholder="Search here 🎮"
        onChange={handleInputChange}
        value={name}
      />
      <button
        className={styles.button}
        onClick={(event) => handleClickButton(event)}>{`Let's go`}</button>
    </>
  );
};

export default SearchBar;
