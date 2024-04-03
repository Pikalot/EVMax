import styles from "./LoginModal.module.css";
import AuthContext from "../store/auth-context";
import { useContext, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { google } from "../assets";
import { createPortal } from "react-dom";

const Modal = (props) => {
  const modalRoot = document.getElementById("modal-root");
  return createPortal(<>{props.children}</>, modalRoot);
};

const LoginModal = () => {
  const ctx = useContext(AuthContext);
  const [isSignedUp, setIsSignedUp] = useState(true);

  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const formHandler = (event) => {
    event.preventDefault();
    const name = nameInputRef.current.value;
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    if (isSignedUp)
      ctx.processDataInput(
        {
          name,
          email,
          password,
        },
        "signup"
      );
    else
      ctx.processDataInput(
        {
          email,
          password,
        },
        "login"
      );

    nameInputRef.current.value = "";
    emailInputRef.current.value = "";
    passwordInputRef.current.value = "";
  };

  const toggleSignInHandler = () => {
    setIsSignedUp((prev) => !prev);
  };

  return (
    <Modal>
      <div
        className={styles.backdrop}
        onClick={() => {
          ctx.setLoginModalActions(false);
        }}
      />
      <div className={styles.modal}>
        <form onSubmit={formHandler}>
          <h1>{isSignedUp ? "Create an Account" : "Sign In"}</h1>
          <div className={styles["social-container"]}>
            <button className={styles["social-icon"]}>
              <img src={google} alt="" />
            </button>
            <button className={styles["social-icon"]}>
              <FontAwesomeIcon icon={faGithub} />
            </button>
          </div>
          <span>or use your account</span>
          {isSignedUp && (
            <input type="text" placeholder="Name" ref={nameInputRef} />
          )}
          <input type="email" placeholder="Email" ref={emailInputRef} />
          <input
            type="password"
            placeholder="Password"
            ref={passwordInputRef}
          />

          <div className={styles.actions}>
            <button type="submit">{isSignedUp ? "Sign Up" : "Sign In"}</button>
          </div>

          <div className={styles.terms}>
            <p>
              Signing up for a EVMax account means you agree to the{" "}
              <span>Privacy Policy</span> and <span>Terms of Service</span>.
            </p>
            <p>
              {isSignedUp ? "Have an account?" : "Doesn't have an account?"}{" "}
              <span onClick={toggleSignInHandler}>
                {isSignedUp ? "Sign in" : "Sign up"}
              </span>
            </p>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default LoginModal;
