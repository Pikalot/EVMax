import styles from "./FeaturedCars.module.css";
import SectionHeader from "../../utilities/SectionHeader";

const CAR_DUMMY_DETAILS = [
  {
    name: "BMW 6-series gran coupe",
    price: 89395,
    model: 2017,
    miles: 3100,
    hp: 240,
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
    images: "#",
  },
  {
    name: "BMW 6-series gran coupe",
    price: 89395,
    model: 2017,
    miles: 3100,
    hp: 240,
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
    images: "#",
  },
  {
    name: "BMW 6-series gran coupe",
    price: 89395,
    model: 2017,
    miles: 3100,
    hp: 240,
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
    images: "#",
  },
  {
    name: "BMW 6-series gran coupe",
    price: 89395,
    model: 2017,
    miles: 3100,
    hp: 240,
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
    images: "#",
  },
  {
    name: "BMW 6-series gran coupe",
    price: 89395,
    model: 2017,
    miles: 3100,
    hp: 240,
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
    images: "#",
  },
  {
    name: "BMW 6-series gran coupe",
    price: 89395,
    model: 2017,
    miles: 3100,
    hp: 240,
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
    images: "#",
  },
];

const CarsFeatureDisplay = (props) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
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

const FeaturedCars = () => {
  return (
    <section id="featured-cars" className={styles["featured-cars"]}>
      <div className="container">
        <SectionHeader
          description="Checkout the Featured Cars"
          title="Featured Cars"
        />

        <div className={styles["featured-cars-content"]}>
          <div className="row">
            {CAR_DUMMY_DETAILS.map((car, index) => (
              <CarsFeatureDisplay
                key={index}
                name={car.name}
                price={car.price}
                model={car.model}
                miles={car.miles}
                hp={car.hp}
                description={car.description}
                images={car.images}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default FeaturedCars;
