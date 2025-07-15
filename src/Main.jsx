import { useState } from "react";
import cities from "./Cities.json";
import styles from "./Main.module.css";

function Main() {
  const [search, setSearch] = useState("");

  const filters = cities.filter((city) =>
    city.startsWith(search)
  );

  const suggestion = search && filters.length > 0 ? filters[0] : "";

  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div className={styles.container}>

      <h3>Type Your City 🔍</h3>
      
      <div className={styles.searchbox}>
        <span className={styles.suggestion}>
          {search}
          <span className={styles.hint}>
            {suggestion.slice(search.length)}
          </span>
        </span>

        
        <input
          type="text"
          value={search}
          onChange={handleChange}
          className={styles.input}
          autoComplete="off"
        />

      </div>

    </div>
  );
}

export default Main;
