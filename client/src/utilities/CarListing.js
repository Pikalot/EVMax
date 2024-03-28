import styles from "./CarListing.module.css";

const CarListing = (props) => {
  return (
    <div className={`col-lg-3 col-md-4 col-sm-6 ${props.className}`}>
      <div className={styles["single-featured-cars"]}>
        <div className={styles["featured-img-box"]}>
          <div className={styles["featured-cars-img"]}>
            <img src={props.images} alt="cars" />
          </div>
          <div className={styles["featured-model-info"]}>
            <p>
              <span>Color: {props.details.color}</span>
              <span>{props.details.miles} miles</span>
              <span>{props.details.hp}HP</span>
              <span>Body: {props.details.body}</span>
            </p>
          </div>
        </div>
        <div className={styles["featured-cars-txt"]}>
          <h2>
            <a href="#">
              {props.details.make} {props.details.model} {props.details.year}
            </a>
          </h2>
          <h3>${props.details.price}</h3>
          <p>{props.details.descriptions}</p>
        </div>
      </div>
    </div>
  );
};

export default CarListing;
