import styles from "./Shop.module.css";
import CarListing from "../utilities/CarListing";
import Filter from "../components/Shop/Filter";
import ContactMe from "../components/Home/ContactMe";
import { useContext } from "react";
import AuthContext from "../store/auth-context";

const Shop = () => {
  const ctx = useContext(AuthContext);
  const cars = ctx.allCars;
  const options = ctx.filterOptions;
  const savedCarsID = ctx.favoriteCarsID;

  let carDisplay = [...cars];

  const sortBy = (array) => {
    switch (options.sortOptions) {
      case "price-low":
        array.sort((a, b) => a.attributes.price - b.attributes.price);
        break;
      case "price-high":
        array.sort((a, b) => b.attributes.price - a.attributes.price);
        break;
      default:
        array = [...cars];
    }
  };

  if (options.isSavedCars) {
    carDisplay = cars.filter((car) => savedCarsID.includes(car.id));
  } else {
    sortBy(carDisplay);
    if (options.body !== "all") {
      carDisplay = carDisplay.filter(
        (car) =>
          car.attributes.body.toLowerCase() === options.body.toLowerCase()
      );
    }
    if (options.make !== "all") {
      carDisplay = carDisplay.filter(
        (car) =>
          car.attributes.make.toLowerCase() === options.make.toLowerCase()
      );
    }
  }

  return (
    <>
      <div className={styles.container} id="shop">
        <Filter />
        <div className={styles["car-display-container"]}>
          {carDisplay.map((car, index) => (
            <CarListing key={index} details={car} />
          ))}
        </div>
      </div>
      <ContactMe />
    </>
  );
};

export default Shop;
