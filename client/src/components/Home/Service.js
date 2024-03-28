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
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut den fugit sed quia.
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
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut den fugit sed quia.
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
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut den fugit sed quia.
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
