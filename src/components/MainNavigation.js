import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styles from "./MainNavigation.module.css";
import { Link } from "react-scroll";
import * as Scroll from "react-scroll";

const MainNavigation = () => {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const scroller = Scroll.scroller;

  const goToPageAndScroll = async (selector) => {
    await navigate("/");
    await scroller.scrollTo(selector, {
      smooth: true,
      spy: true,
    });
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {location === "/" ? (
            <>
              <li>
                <Link
                  activeClass={styles.active}
                  className={styles.link}
                  smooth
                  spy
                  to="home"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  activeClass={styles.active}
                  className={styles.link}
                  smooth
                  spy
                  to="service"
                >
                  SERVICE
                </Link>
              </li>
              <li>
                <Link
                  activeClass={styles.active}
                  className={styles.link}
                  smooth
                  spy
                  to="featured-cars"
                >
                  FEATURED CARS
                </Link>
              </li>
              <li>
                <Link
                  activeClass={styles.active}
                  className={styles.link}
                  smooth
                  spy
                  to="brands"
                >
                  BRANDS
                </Link>
              </li>
              <li>
                <NavLink
                  to="/cars"
                  className={({ isActive }) =>
                    isActive ? styles.active : undefined
                  }
                >
                  SHOP
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
            </>
          ) : (
            <>
              <li>
                <button onClick={() => goToPageAndScroll("home")}>HOME</button>
              </li>
              <li>
                <button onClick={() => goToPageAndScroll("service")}>
                  SERVICE
                </button>
              </li>
              <li>
                <button onClick={() => goToPageAndScroll("featured-cars")}>
                  FEATURED CARS
                </button>
              </li>
              <li>
                <button onClick={() => goToPageAndScroll("brands")}>
                  BRANDS
                </button>
              </li>
              <li>
                <NavLink
                  to="/cars"
                  className={({ isActive }) =>
                    isActive ? styles.active : undefined
                  }
                >
                  SHOP
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
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
