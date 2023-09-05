import styles from "./SearchaBar.module.css";

const SearchBar = () => {
  return (
    <>
      <input
        className={styles.input}
        type="text"
        placeholder="Search here 🎮"
      />
      <button className={styles.button}>{`Let's go`}</button>
    </>
  );
};

export default SearchBar;
