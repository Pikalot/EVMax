import styles from "./Home.module.css";
import Welcome from "../components/Home/Welcome";
import Service from "../components/Home/Service";
import FeaturedCars from "../components/Home/FeaturedCars";
import Brands from "../components/Home/Brands";
import ContactMe from "../components/Home/ContactMe";
import Testimonial from "../components/Home/Testimonial";

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
