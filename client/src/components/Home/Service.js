import {
  faCar,
  faShieldAlt,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Service.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import fadeInVariant from "../../utilities/fadeInVariant";
import { useEffect } from "react";

const Service = () => {
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
    <section id="service" className={styles.service}>
      <div className="container">
        <motion.div
          className={styles["service-content"]}
          variants={fadeInVariant}
          initial="hidden"
          animate={control}
          ref={ref}
        >
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className={styles["single-service-item"]}>
                <div className={styles["single-service-icon"]}>
                  <FontAwesomeIcon icon={faCar} />
                </div>
                <h2>
                  <a href="#">Largest Electric Car Dealership</a>
                </h2>
                <p>
                  Discover the joy of sustainable driving with our extensive
                  range of electric vehicles
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className={styles["single-service-item"]}>
                <div className={styles["single-service-icon"]}>
                  <FontAwesomeIcon icon={faWrench}></FontAwesomeIcon>
                </div>
                <h2>
                  <a href="#">Unlimited Repair Warranty</a>
                </h2>
                <p>
                  Drive with confidence knowing your vehicle is backed by our
                  comprehensive repair warranty
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className={styles["single-service-item"]}>
                <div className={styles["single-service-icon"]}>
                  <FontAwesomeIcon icon={faShieldAlt}></FontAwesomeIcon>
                </div>
                <h2>
                  <a href="#">Insurance Support</a>
                </h2>
                <p>
                  We've got you covered! Benefit from our expert insurance
                  support tailored to your vehicle needs
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
