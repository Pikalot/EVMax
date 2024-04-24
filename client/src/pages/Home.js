import styles from "./Home.module.css";
import Welcome from "../components/Home/Welcome";
import Service from "../components/Home/Service";
import FeaturedCars from "../components/Home/FeaturedCars";
import Brands from "../components/Home/Brands";
import Footer from "../components/Home/Footer";
import Testimonial from "../components/Home/Testimonial";

const Home = () => {
  return (
    <>
      <Welcome />
      <Service />
      <FeaturedCars />
      <Testimonial />
      <Brands />
      <Footer />
    </>
  );
};

export default Home;
