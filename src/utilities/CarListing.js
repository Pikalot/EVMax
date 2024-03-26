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
              model: {props.model}
              <span className={styles["featured-mi-span"]}>
                {props.miles} mi
              </span>
              <span className={styles["featured-hp-span"]}>{props.hp}HP</span>
              automatic
            </p>
          </div>
        </div>
        <div className={styles["featured-cars-txt"]}>
          <h2>
            <a href="#">{props.name}</a>
          </h2>
          <h3>${props.price}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CarListing;
