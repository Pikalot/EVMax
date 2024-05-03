import { faSort } from "@fortawesome/free-solid-svg-icons";
import styles from "./Filter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import AuthContext from "../../store/auth-context";
import { useNavigate } from 'react-router-dom';

const Filter = () => {
  const [disabled, setDisabled] = useState(false);

  const ctx = useContext(AuthContext);

  const navigate = useNavigate();

  const sortHandler = (event) => {
    ctx.setFilterOptions({ sortOptions: event.target.value });
  };

  const bodyHandler = (event) => {
    ctx.setFilterOptions({ body: event.target.value });
  };

  const makeHandler = (event) => {
    ctx.setFilterOptions({ make: event.target.value });
  };

  const saveCarHandler = (event) => {
    setDisabled(event.target.checked);
    ctx.setFilterOptions({ isSavedCars: event.target.checked });
  };

  const handleNavigate = () => {
    navigate('/appointment');
  }

  return (
    <div className={styles["car-filter-container"]}>
      <form className={styles["filter-form"]}>
        <h5>
          <FontAwesomeIcon icon={faSort} /> Filter & Sort
        </h5>

        <div className={styles["filter-options"]}>
          <label htmlFor="sort-select">Sort by</label>
          <select
            name="sort"
            id="sort-select"
            onChange={sortHandler}
            disabled={disabled}
            value={ctx.filterOptions.sortOptions}
          >
            <option selected value="">
              --
            </option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>

        <div className={styles["filter-options"]}>
          <label htmlFor="body-select">Body</label>
          <select
            name="body"
            id="body-select"
            onChange={bodyHandler}
            disabled={disabled}
            value={ctx.filterOptions.body}
          >
            <option selected value="all">
              All
            </option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="coupe">COUPE</option>
          </select>
        </div>

        <div className={styles["filter-options"]}>
          <label htmlFor="make-select">Make</label>
          <select
            name="make"
            id="make-select"
            onChange={makeHandler}
            disabled={disabled}
            value={ctx.filterOptions.make}
          >
            <option selected value="all">
              All
            </option>
            <option value="lucid">Lucid</option>
            <option value="tesla">Tesla</option>
            <option value="nissan">Nissan</option>
            <option value="bmw">BMW</option>
            <option value="volkswagen">Volkswagen</option>
          </select>
        </div>

        <div className={styles["filter-options"]}>
          <label htmlFor="save">Saved Cars</label>
          <input
            type="checkbox"
            name="isSaved"
            id="save"
            onChange={saveCarHandler}
            checked={ctx.filterOptions.isSavedCars}
          />
        </div>
        <button className={styles['submitButton']} onClick={handleNavigate}>
          <b>Schedule a Test Drive</b></button>
      </form>
    </div>
  );
};

export default Filter;
