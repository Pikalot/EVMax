import { NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cars"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              FEATURED CARS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/brands"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              BRANDS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contactme"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              CONTACT ME
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
