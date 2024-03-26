import styles from "./Shop.module.css";
import CarListing from "../utilities/CarListing";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import ContactMe from "../components/Home/ContactMe";

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

const Shop = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles["car-filter-container"]}>
          <form className={styles["filter-form"]}>
            <h5>
              <FontAwesomeIcon icon={faSort} /> Filter & Sort
            </h5>

            <div className={styles["filter-options"]}>
              <label htmlFor="">Car Type</label>
              <select name="" id="" value="">
                <option value="">Sedan</option>
                <option value="">SUV</option>
                <option value="">COUPE</option>
              </select>
            </div>

            <div className={styles["filter-options"]}>
              <label htmlFor="">Brand</label>
              <select name="" id="" value="">
                <option value="">Lucid</option>
                <option value="">Tesla</option>
                <option value="">Tesla</option>
                <option value="">Tesla</option>
                <option value="">Tesla</option>
              </select>
            </div>
          </form>
        </div>

        <div className={styles["car-display-container"]}>
          {CAR_DUMMY_DETAILS.map((car, index) => (
            <CarListing
              key={index}
              name={car.name}
              model={car.model}
              miles={car.model}
              price={car.price}
              hp={car.hp}
              description={car.description}
              images={car.images}
              className={styles["single-car-display"]}
            />
          ))}
        </div>
      </div>
      <ContactMe />
    </>
  );
};

export default Shop;
