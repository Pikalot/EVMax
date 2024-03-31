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

  const json = {
    sortOptions: "",
    body: "all",
    make: "all",
    isSavedCars: false,
  };

  const sortBy = (array) => {
    switch (options.sortOptions) {
      case "":
        array = [...cars];
        break;
      case "price-low":
        array.sort((a, b) => a.attributes.price - b.attributes.price);
        break;
      case "price-high":
        array.sort((a, b) => b.attributes.price - a.attributes.price);
        break;
      default:
        console.log("default state filter");
    }
  };

  if (options.isSavedCars) {
    carDisplay = cars.filter((car) => savedCarsID.includes(car.id));
  } else {
    sortBy(carDisplay);
  }

  return (
    <>
      <div
        className={styles.container}
        style={options.isSavedCars ? { height: "100vh" } : {}}
      >
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
