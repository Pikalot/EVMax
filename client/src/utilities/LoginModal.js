import styles from "./LoginModal.module.css";
import AuthContext from "../store/auth-context";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { google } from "../assets";

const LoginModal = () => {
  const ctx = useContext(AuthContext);

  return (
    <>
      <div className={styles.backdrop}>
        <div className={styles.modal}>
          <form>
            <h1>Sign In</h1>
            <div className={styles["social-container"]}>
              <button className={styles["social-icon"]}>
                <img src={google} alt="" />
              </button>
              <button className={styles["social-icon"]}>
                <FontAwesomeIcon icon={faGithub} />
              </button>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <div className={styles.actions}>
              <button>Sign In</button>
            </div>
          </form>
          <button
            className={styles["close-modal__button"]}
            onClick={ctx.toggleLoginModalActions}
          >
            X
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
