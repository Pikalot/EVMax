import styles from "./CarListing.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import AuthContext from "../store/auth-context";
import Carousel from "react-bootstrap/Carousel";

const CarListing = (props) => {
  const ctx = useContext(AuthContext);
  const apiUrl = "http://localhost:1337";
  const favoriteHandler = () => {
    ctx.saveCar(props.details.id);
  };

  return (
    <div
      className={`col-lg-3 col-md-4 col-sm-6 ${props.className} ${styles["box-shadow"]}`}
    >
      <div className={styles["single-featured-cars"]}>
        <div className={styles["featured-img-box"]}>
          <div className={styles["featured-cars-img"]}>
            <Carousel interval={null} indicators={false}>
              {props.details.attributes.images.data !== null
                ? props.details.attributes.images.data.map((carImg, index) => (
                    <Carousel.Item key={index}>
                      <img src={apiUrl + carImg.attributes.url} alt="cars" />
                    </Carousel.Item>
                  ))
                : undefined}
            </Carousel>
          </div>

          <div className={styles["featured-model-info"]}>
            <p>
              <span>Color: {props.details.attributes.color}</span>
              <span>{props.details.attributes.miles} miles</span>
              <span>{props.details.attributes.hp}HP</span>
              <span>Body: {props.details.attributes.body}</span>
            </p>
          </div>
        </div>

        <div className={styles["featured-cars-txt"]}>
          <h2>
            <a href="#">
              {props.details.attributes.make} {props.details.attributes.model}{" "}
              {props.details.year}
            </a>
          </h2>
          <h3>${props.details.attributes.price}</h3>
          <p>{props.details.attributes.descriptions}</p>
        </div>

        <div className={styles["favorite-button"]}>
          <button onClick={favoriteHandler}>
            <FontAwesomeIcon
              icon={faHeart}
              style={
                ctx.favoriteCarsID.includes(props.details.id)
                  ? { color: "red" }
                  : { color: "gray" }
              }
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarListing;
