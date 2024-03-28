import styles from "./FeaturedCars.module.css";
import SectionHeader from "../../utilities/SectionHeader";
import CarListing from "../../utilities/CarListing";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";

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

const FeaturedCars = () => {
  const ctx = useContext(AuthContext);
  const featuredCars = ctx.featuredCars;

  return (
    <section id="featured-cars" className={styles["featured-cars"]}>
      <div className="container">
        <SectionHeader
          description="Checkout the Featured Cars"
          title="Featured Cars"
        />

        <div className={styles["featured-cars-content"]}>
          <div className="row">
            {featuredCars.map((car, index) => (
              <CarListing key={index} details={car.attributes} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default FeaturedCars;
