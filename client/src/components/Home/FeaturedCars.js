import styles from "./FeaturedCars.module.css";
import SectionHeader from "../../utilities/SectionHeader";
import CarListing from "../../utilities/CarListing";
import { useContext, useEffect } from "react";
import AuthContext from "../../store/auth-context";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import fadeInVariant from "../../utilities/fadeInVariant";

const FeaturedCars = () => {
  const ctx = useContext(AuthContext);
  const featuredCars = ctx.featuredCars;
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <section id="featured-cars" className={styles["featured-cars"]}>
      <div className="container">
        <SectionHeader
          description="Checkout the Featured Cars"
          title="Featured Cars"
        />

        <div className={styles["featured-cars-content"]}>
          <motion.div
            className="row"
            variants={fadeInVariant}
            initial="hidden"
            animate={control}
            ref={ref}
          >
            {featuredCars.map((car, index) => (
              <CarListing key={index} details={car.attributes} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default FeaturedCars;
