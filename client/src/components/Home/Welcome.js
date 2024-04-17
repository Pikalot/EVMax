import styles from "./Welcome.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import fadeInVariant from "../../utilities/fadeInVariant";
import { useEffect } from "react";
import ContactUs from "../../pages/ContactUs";
import { Link } from "react-router-dom";

const Welcome = () => {
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
    <>
      <section id="home" className={styles["welcome-hero"]}>
        <div className="container">
          <div className={styles["welcome-hero-txt"]}>
            <h2>get your desired car in resonable price</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link to="/ContactUs">
            <button
              className={styles["welcome-btn"]}
              // onClick="window.location.href='/ContactUs'"
            >
              contact us
            </button>
            </Link>
          </div>
        </div>

        <motion.div
          className="container"
          variants={fadeInVariant}
          initial="hidden"
          animate={control}
          ref={ref}
        >
          <div className={styles["model-search-content"]}>
            <div className={`row ${styles["row"]}`}>
              <div className={`col-md-offset-1 col-md-2 col-sm-12`}>
                <div className={styles["single-model-search"]}>
                  <h2>select year</h2>
                  <div className={styles["model-select-icon"]}>
                    <select
                      className={`form-control ${styles["form-control"]}`}
                    >
                      <option value="default">year</option>

                      <option value="2018">2018</option>

                      <option value="2017">2017</option>
                      <option value="2016">2016</option>
                    </select>
                  </div>
                </div>
                <div className={styles["single-model-search"]}>
                  <h2>body style</h2>
                  <div className={styles["model-select-icon"]}>
                    <select
                      className={`form-control ${styles["form-control"]}`}
                    >
                      <option value="default">style</option>
                      <option value="sedan">sedan</option>
                      <option value="van">van</option>
                      <option value="roadster">roadster</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className={`col-md-offset-1 col-md-2 col-sm-12`}>
                <div className={styles["single-model-search"]}>
                  <h2>select make</h2>
                  <div className={styles["model-select-icon"]}>
                    <select
                      className={`form-control ${styles["form-control"]}`}
                    >
                      <option value="default">make</option>

                      <option value="toyota">toyota</option>

                      <option value="holden">holden</option>
                      <option value="maecedes-benz">maecedes-benz.</option>
                    </select>
                  </div>
                </div>
                <div className={styles["single-model-search"]}>
                  <h2>car condition</h2>
                  <div className={styles["model-select-icon"]}>
                    <select
                      className={`form-control ${styles["form-control"]}`}
                    >
                      <option value="default">condition</option>
                      <option value="something">something</option>
                      <option value="something">something</option>
                      <option value="something">something</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className={`col-md-offset-1 col-md-2 col-sm-12`}>
                <div className={styles["single-model-search"]}>
                  <h2>select model</h2>
                  <div className={styles["model-select-icon"]}>
                    <select
                      className={`form-control ${styles["form-control"]}`}
                    >
                      <option value="default">model</option>

                      <option value="kia-rio">kia-rio</option>

                      <option value="mitsubishi">mitsubishi</option>
                      <option value="ford">ford</option>
                    </select>
                  </div>
                </div>
                <div className={styles["single-model-search"]}>
                  <h2>select price</h2>
                  <div className={styles["model-select-icon"]}>
                    <select
                      className={`form-control ${styles["form-control"]}`}
                    >
                      <option value="default">price</option>
                      <option value="$0.00">$0.00</option>
                      <option value="$0.00">$0.00</option>
                      <option value="$0.00">$0.00</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className={`col-md-2 col-sm-12`}>
                <div className={`${styles["single-model-search"]} text-center`}>
                  <button
                    className={`${styles["welcome-btn"]} ${styles["model-search-btn"]}`}
                    // onClick="window.location.href='#'"
                  >
                    search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Welcome;
