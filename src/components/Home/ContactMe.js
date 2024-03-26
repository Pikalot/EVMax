import styles from "./ContactMe.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faPinterestSquare,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ContactMe = () => {
  return (
    <footer id="contact-me" className={styles["contact"]}>
      <div className="container">
        <div className={styles["footer-top"]}>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className={styles["single-footer-widget"]}>
                <div className={styles["footer-logo"]}>
                  <a href="#" id="scroll-top">
                    EVMAX
                  </a>
                </div>
                <p>
                  Ased do eiusm tempor incidi ut labore et dolore magnaian
                  aliqua. Ut enim ad minim veniam.
                </p>
                <div className={styles["footer-contact"]}>
                  <p>info@evmax.com</p>
                  <p>+1 (999) 999 9999</p>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-6">
              <div className={styles["single-footer-widget"]}>
                <h2>about evmax</h2>
                <ul>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Career</a>
                  </li>
                  <li>
                    <a href="#">Terms of service</a>
                  </li>
                  <li>
                    <a href="#">Privacy policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-xs-12">
              <div className={styles["single-footer-widget"]}>
                <h2>Top Brands</h2>
                <div className="row">
                  <div className="col-md-7 col-xs-6">
                    <ul>
                      <li>
                        <a href="#">BMW</a>
                      </li>
                      <li>
                        <a href="#">Lamborghini</a>
                      </li>
                      <li>
                        <a href="#">Camaro</a>
                      </li>
                      <li>
                        <a href="#">Audi</a>
                      </li>
                      <li>
                        <a href="#">Infinity</a>
                      </li>
                      <li>
                        <a href="#">Nissan</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-5 col-xs-6">
                    <ul>
                      <li>
                        <a href="#">Ferrari</a>
                      </li>
                      <li>
                        <a href="#">Porsche</a>
                      </li>
                      <li>
                        <a href="#">Land Rover</a>
                      </li>
                      <li>
                        <a href="#">Aston Martin</a>
                      </li>
                      <li>
                        <a href="#">Mercedes</a>
                      </li>
                      <li>
                        <a href="#">Opel</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-offset-1 col-md-3 col-sm-6">
              <div className={styles["single-footer-widget"]}>
                <h2>news letter</h2>
                <div className={styles["footer-newsletter"]}>
                  <p>Subscribe to get latest news update and informations</p>
                </div>
                <div className={styles["hm-foot-email"]}>
                  <div className={styles["foot-email-box"]}>
                    <input
                      type="text"
                      className={`form-control ${styles["form-control"]}`}
                      placeholder="Add Email"
                    />
                  </div>
                  <div className={styles["foot-email-subscribe"]}>
                    <span>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["footer-copyright"]}>
          <div className="row">
            <div className="col-sm-6">
              <p>
                <a href="#">Copyright @ EVMAX</a>.
              </p>
            </div>
            <div className="col-sm-6">
              <div className={styles["footer-social"]}>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebookSquare}></FontAwesomeIcon>
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faPinterestSquare}></FontAwesomeIcon>
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faXTwitter}></FontAwesomeIcon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id={styles["scroll-Top"]}>
        <div className={styles["return-to-top"]}>
          <FontAwesomeIcon
            icon={faArrowUp}
            id="scroll-top"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Back to Top"
            aria-hidden="true"
          ></FontAwesomeIcon>
        </div>
      </div>
    </footer>
  );
};

export default ContactMe;
