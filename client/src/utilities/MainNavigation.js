import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styles from "./MainNavigation.module.css";
import { Link } from "react-scroll";
import * as Scroll from "react-scroll";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../store/auth-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const MainNavigation = () => {
  const ctx = useContext(AuthContext);
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const scroller = Scroll.scroller;
  const [isActive, setIsActive] = useState(false);
  const [isDropdown, setIsDropdown] = useState(true);
  const [isShrink, setIsShrink] = useState(false);

  const toggleActiveClass = () => {
    setIsActive((prev) => !prev);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  const hoverHandler = (status) => {
    setIsDropdown(status);
  };

  const logoutHandler = () => {
    setIsDropdown(false);
    ctx.processDataInput(null, "logout");
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
    } else if (pageTitle === "contact") {
      await navigate("/ContactUs");
      await scroller.scrollTo(selector, {
        smooth: true,
        spy: true,
        duration: 0,
      });
    }
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener("scroll", () =>
        setIsShrink(window.scrollY > 100)
      );
    }
  }, []);

  return (
    <header className={`${styles.header} ${isShrink ? styles.shrink : ""}`}>
      <h2>EVMAX</h2>

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
                <NavLink
                  to="/ContactUs"
                  className={({ isActive }) =>
                    isActive ? styles.active : undefined
                  }
                  onClick={() => {
                    setIsActive(false);
                    goToPageAndScroll("contact-us", "contact");
                  }}
                >
                  CONTACT US
                </NavLink>
              </li>

              {ctx.currentUser === null ? (
                <button
                  className={styles["button-inside"]}
                  onClick={() => {
                    ctx.setLoginModalActions(true);
                  }}
                >
                  <FontAwesomeIcon icon={faUser} />
                </button>
              ) : (
                <div
                  className={styles.dropdown}
                  onMouseEnter={() => {
                    hoverHandler(true);
                  }}
                  onMouseLeave={() => {
                    hoverHandler(false);
                  }}
                >
                  <button className={styles["username-button"]} type="button">
                    <FontAwesomeIcon icon={faUser} />
                    <span>
                      {" "}
                      {ctx.currentUser.displayName.includes(" ")
                        ? ctx.currentUser.displayName
                            .substr(0, ctx.currentUser.displayName.indexOf(" "))
                            .toUpperCase()
                        : ctx.currentUser.displayName.toUpperCase()}
                    </span>
                  </button>
                  <div
                    className={
                      isDropdown
                        ? `${styles["dropdown-content"]} ${styles.show}`
                        : styles["dropdown-content"]
                    }
                  >
                    <button onClick={logoutHandler} type="button">
                      Log Out
                    </button>
                  </div>
                </div>
              )}
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
                <NavLink
                  to="/ContactUs"
                  className={({ isActive }) =>
                    isActive ? styles.active : undefined
                  }
                  onClick={() => {
                    scroller.scrollTo("contact-us", {
                      smooth: true,
                      spy: true,
                      duration: 0,
                    });
                    setIsActive(false);
                  }}
                >
                  CONTACT US
                </NavLink>
              </li>

              {ctx.currentUser === null ? (
                <button
                  className={styles["button-inside"]}
                  onClick={() => {
                    ctx.setLoginModalActions(true);
                  }}
                >
                  <FontAwesomeIcon icon={faUser} />
                </button>
              ) : (
                <div
                  className={styles.dropdown}
                  onMouseEnter={() => {
                    hoverHandler(true);
                  }}
                  onMouseLeave={() => {
                    hoverHandler(false);
                  }}
                >
                  <button className={styles["username-button"]} type="button">
                    <FontAwesomeIcon icon={faUser} />
                    <span>
                      {" "}
                      {ctx.currentUser.displayName
                        .substr(0, ctx.currentUser.displayName.indexOf(" "))
                        .toUpperCase()}
                    </span>
                  </button>
                  <div
                    className={
                      isDropdown
                        ? `${styles["dropdown-content"]} ${styles.show}`
                        : styles["dropdown-content"]
                    }
                  >
                    <button onClick={logoutHandler} type="button">
                      Log Out
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </ul>
        {ctx.currentUser === null ? (
          <button
            className={styles["button-outside"]}
            onClick={() => {
              ctx.setLoginModalActions(true);
            }}
          >
            <FontAwesomeIcon icon={faUser} />
          </button>
        ) : (
          <div
            className={styles.dropdown}
            onMouseEnter={() => {
              hoverHandler(true);
            }}
            onMouseLeave={() => {
              hoverHandler(false);
            }}
          >
            <button
              className={`${styles["button-outside"]} ${styles["username-button"]}`}
              type="button"
            >
              <FontAwesomeIcon icon={faUser} />
              <span>
                {" "}
                {ctx.currentUser.displayName
                  .substr(0, ctx.currentUser.displayName.indexOf(" "))
                  .toUpperCase()}
              </span>
            </button>
            <div
              className={
                isDropdown
                  ? `${styles["dropdown-content"]} ${styles.show}`
                  : styles["dropdown-content"]
              }
            >
              <button
                type="button"
                onClick={logoutHandler}
                className={`${styles["button-outside"]}`}
              >
                Log Out
              </button>
            </div>
          </div>
        )}
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
