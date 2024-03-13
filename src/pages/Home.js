import styles from "./Home.module.css";
import Welcome from "../components/Welcome";
import Service from "../components/Service";
import FeaturedCars from "../components/FeaturedCars";
import Brands from "../components/Brands";
import ContactMe from "../components/ContactMe";
import Testimonial from "../components/Testimonial";
const Home = () => {
  return (
    <>
      <Welcome />
      <Service />
      <FeaturedCars />
      <Testimonial />
      <Brands />
      <ContactMe />
    </>
  );
};

export default Home;
