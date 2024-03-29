import styles from "./Shop.module.css";
import CarListing from "../utilities/CarListing";
import Filter from "../components/Shop/Filter";
import ContactMe from "../components/Home/ContactMe";
import { useContext } from "react";
import AuthContext from "../store/auth-context";

const Shop = () => {
  const ctx = useContext(AuthContext);
  const cars = ctx.allCars;

  return (
    <>
      <div className={styles.container}>
        <Filter />
        <div className={styles["car-display-container"]}>
          {cars.map((car, index) => (
            <CarListing key={index} details={car} />
          ))}
        </div>
      </div>
      <ContactMe />
    </>
  );
};

export default Shop;
