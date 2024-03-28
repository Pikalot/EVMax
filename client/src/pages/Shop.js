import styles from "./Shop.module.css";
import CarListing from "../utilities/CarListing";
import Filter from "../components/Shop/Filter";
import ContactMe from "../components/Home/ContactMe";
import { useContext } from "react";
import AuthContext from "../store/auth-context";

// const CAR_DUMMY_DETAILS = [
//   {
//     name: "BMW 6-series gran coupe",
//     price: 89395,
//     model: 2017,
//     miles: 3100,
//     hp: 240,
//     description:
//       "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
//     images: "#",
//   },
//   {
//     name: "BMW 6-series gran coupe",
//     price: 89395,
//     model: 2017,
//     miles: 3100,
//     hp: 240,
//     description:
//       "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
//     images: "#",
//   },
//   {
//     name: "BMW 6-series gran coupe",
//     price: 89395,
//     model: 2017,
//     miles: 3100,
//     hp: 240,
//     description:
//       "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
//     images: "#",
//   },
//   {
//     name: "BMW 6-series gran coupe",
//     price: 89395,
//     model: 2017,
//     miles: 3100,
//     hp: 240,
//     description:
//       "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
//     images: "#",
//   },
//   {
//     name: "BMW 6-series gran coupe",
//     price: 89395,
//     model: 2017,
//     miles: 3100,
//     hp: 240,
//     description:
//       "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
//     images: "#",
//   },
//   {
//     name: "BMW 6-series gran coupe",
//     price: 89395,
//     model: 2017,
//     miles: 3100,
//     hp: 240,
//     description:
//       "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
//     images: "#",
//   },
// ];

const Shop = () => {
  const ctx = useContext(AuthContext);
  const cars = ctx.allCars;

  return (
    <>
      <div className={styles.container}>
        <Filter />
        <div className={styles["car-display-container"]}>
          {cars.map((car, index) => (
            <CarListing key={index} details={car.attributes} />
          ))}
        </div>
      </div>
      <ContactMe />
    </>
  );
};

export default Shop;
