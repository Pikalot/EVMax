import { faSort } from "@fortawesome/free-solid-svg-icons";
import styles from "./Filter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Filter = () => {
  return (
    <div className={styles["car-filter-container"]}>
      <form className={styles["filter-form"]}>
        <h5>
          <FontAwesomeIcon icon={faSort} /> Filter & Sort
        </h5>

        <div className={styles["filter-options"]}>
          <label htmlFor="">Body</label>
          <select name="" id="" value="">
            <option value="">Sedan</option>
            <option value="">SUV</option>
            <option value="">COUPE</option>
          </select>
        </div>

        <div className={styles["filter-options"]}>
          <label htmlFor="">Make</label>
          <select name="" id="" value="">
            <option value="">Lucid</option>
            <option value="">Tesla</option>
            {/* <option value="">Tesla</option>
            <option value="">Tesla</option>
            <option value="">Tesla</option> */}
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filter;
