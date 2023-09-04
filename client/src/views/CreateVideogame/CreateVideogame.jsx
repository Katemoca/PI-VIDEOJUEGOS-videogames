import { Link } from "react-router-dom";
// import { useState } from "redux";

import styles from "./CreateVideogame.module.css";

function CreateVideogame() {
  // const [form, setForm] = useState({
  //   name: "",
  //   background_image: "",
  //   description: "",
  //   rating: 0,
  //   released: "",
  //   genres: [],
  //   platforms: [],
  // });

  return (
    <div className={`${styles.mainContainer} ${styles["full-screen-bg"]}`}>
      <div className={styles.create}>
        <Link to="/home">
          <button className={styles.buttonGoBack}>Go back</button>
        </Link>

        <div className={styles.form}>
          <form>
            <p className={styles.title}>
              Here you can create your own videogame
            </p>
            <div>
              <label style={{ fontWeight: "bold" }}>Name: </label>
              <input
                className={styles.inputs}
                type="text"
                value=""
                name="name"
                onChange={() => {}}
              />
            </div>
            <div>
              <label style={{ fontWeight: "bold" }}>Image URL: </label>
              <input
                className={styles.inputs}
                type="text"
                value=""
                name="background_image"
                onChange={() => {}}
              />
            </div>
            <div>
              <label style={{ fontWeight: "bold" }}>Description: </label>
              <input
                className={styles.inputs}
                type="text"
                value=""
                name="description"
                onChange={() => {}}
              />
            </div>
            <div>
              <label style={{ fontWeight: "bold" }}>Platforms: </label>
              <select defaultValue="0" onChange={() => {}}>
                <option disabled value="0">
                  Platforms
                </option>
                <option key="" value=""></option>
              </select>
              <div className={styles.patforms}>
                <button
                  className={styles.buttonPlatforms}
                  key=""
                  value=""
                  onClick={() => {}}></button>
              </div>
            </div>
            <div>
              <label style={{ fontWeight: "bold" }}>Released Date: </label>
              <input
                className={styles.inputs}
                type="date"
                value=""
                name="released"
                onChange={() => {}}
              />
            </div>
            <div>
              <label style={{ fontWeight: "bold" }}>Rating: </label>
              <input
                className={styles.inputs}
                type="range"
                value=""
                name="rating"
                onChange={() => {}}
              />
            </div>
            <div>
              <label style={{ fontWeight: "bold" }}>Genres: </label>
              <div className={styles.genresContainer}>
                <div>
                  <input
                    className={styles.inputs}
                    type="checkbox"
                    value=""
                    name="genres"
                    onChange={() => {}}
                  />
                </div>
              </div>
              <button type="submit" className={styles.submitbutton}>
                Create my videogame
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateVideogame;
