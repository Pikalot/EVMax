import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styles from "./MainNavigation.module.css";
import { Link } from "react-scroll";
import * as Scroll from "react-scroll";
import { useContext, useState } from "react";
import AuthContext from "../store/auth-context";

const MainNavigation = () => {
  const ctx = useContext(AuthContext);
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const scroller = Scroll.scroller;
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive((prev) => !prev);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  const goToPageAndScroll = async (selector, pageTitle) => {
    if (pageTitle === "home") {
      await navigate("/");
      await scroller.scrollTo(selector, {
        smooth: true,
        spy: true,
        duration: 0,
      });
    } else if (pageTitle === "shop") {
      await navigate("/cars");
      await scroller.scrollTo(selector, {
        smooth: true,
        spy: true,
        duration: 0,
      });
    }
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={`${styles.list} ${isActive ? styles.active : ""}`}>
          {location === "/" ? (
            <>
              <li>
                <Link
                  onClick={removeActive}
                  activeClass={styles.active}
                  className={styles.link}
                  smooth
                  spy
                  duration={0}
                  to="home"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  onClick={removeActive}
                  activeClass={styles.active}
                  className={styles.link}
                  smooth
                  spy
                  duration={0}
                  to="service"
                >
                  SERVICE
                </Link>
              </li>
              <li>
                <Link
                  onClick={removeActive}
                  activeClass={styles.active}
                  className={styles.link}
                  smooth
                  spy
                  duration={0}
                  to="featured-cars"
                >
                  FEATURED CARS
                </Link>
              </li>
              <li>
                <Link
                  onClick={removeActive}
                  activeClass={styles.active}
                  className={styles.link}
                  smooth
                  spy
                  duration={0}
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
                  onClick={() => {
                    setIsActive(false);
                    goToPageAndScroll("shop", "shop");
                    ctx.setFilterOptions({
                      sortOptions: "",
                      body: "all",
                      make: "all",
                      isSavedCars: false,
                    });
                  }}
                >
                  SHOP
                </NavLink>
              </li>
              <li>
                <Link
                  onClick={removeActive}
                  activeClass={styles.active}
                  className={styles.link}
                  smooth
                  spy
                  offset={-530}
                  duration={0}
                  to="contact-me"
                >
                  CONTACT ME
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <button
                  onClick={() => {
                    setIsActive(false);
                    goToPageAndScroll("home", "home");
                  }}
                >
                  HOME
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setIsActive(false);
                    goToPageAndScroll("service", "home");
                  }}
                >
                  SERVICE
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setIsActive(false);
                    goToPageAndScroll("featured-cars", "home");
                  }}
                >
                  FEATURED CARS
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setIsActive(false);
                    goToPageAndScroll("brands", "home");
                  }}
                >
                  BRANDS
                </button>
              </li>
              <li>
                <NavLink
                  to="/cars"
                  className={({ isActive }) =>
                    isActive ? styles.active : undefined
                  }
                  onClick={() => {
                    scroller.scrollTo("shop", {
                      smooth: true,
                      spy: true,
                      duration: 0,
                    });
                    setIsActive(false);
                    ctx.setFilterOptions({
                      sortOptions: "",
                      body: "all",
                      make: "all",
                      isSavedCars: false,
                    });
                  }}
                >
                  SHOP
                </NavLink>
              </li>
              <li>
                <button
                  onClick={() => {
                    setIsActive(false);
                    goToPageAndScroll("contact-me", "home");
                  }}
                >
                  CONTACT ME
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>

      <div
        className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
        onClick={toggleActiveClass}
      >
        <span className={`${styles.bar}`}></span>
        <span className={`${styles.bar}`}></span>
        <span className={`${styles.bar}`}></span>
      </div>
    </header>
  );
};

export default MainNavigation;
