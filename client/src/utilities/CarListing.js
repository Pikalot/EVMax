import styles from "./CarListing.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../store/auth-context";

const CarListing = (props) => {
  const ctx = useContext(AuthContext);

  const favoriteHandler = () => {
    ctx.carSave(props.details.id);
  };

  return (
    <div
      className={`col-lg-3 col-md-4 col-sm-6 ${props.className} ${styles["box-shadow"]}`}
    >
      <div className={styles["single-featured-cars"]}>
        <div className={styles["featured-img-box"]}>
          <div className={styles["featured-cars-img"]}>
            <img src={props.images} alt="cars" />
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
                ctx.favoriteCars.includes(props.details.id)
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
