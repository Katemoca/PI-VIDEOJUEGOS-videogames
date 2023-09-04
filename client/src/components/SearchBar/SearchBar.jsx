import styles from "./SearchaBar.module.css";

function SearchBar() {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search here 🎮"
      />
      <button className={styles.button}>{`Let's go`}</button>
    </div>
  );
}

export default SearchBar;
