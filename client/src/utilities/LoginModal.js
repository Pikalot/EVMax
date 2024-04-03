import styles from "./LoginModal.module.css";
import AuthContext from "../store/auth-context";
import { useContext, useState } from "react";
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
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const nameInputHandler = (event) => {
    setUserInput((prev) => ({ ...prev, name: event.target.value }));
  };

  const emailInputHandler = (event) => {
    setUserInput((prev) => ({ ...prev, email: event.target.value }));
  };

  const passwordInputHandler = (event) => {
    setUserInput((prev) => ({ ...prev, password: event.target.value }));
  };

  const formHandler = (event) => {
    event.preventDefault();
    if (isSignedUp) ctx.processDataInput(userInput, "signup");
    else ctx.processDataInput(userInput, "login");

    setUserInput({ name: "", email: "", password: "" });
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
            <input
              type="text"
              placeholder="Name"
              onChange={nameInputHandler}
              value={userInput.name}
            />
          )}
          <input
            type="email"
            placeholder="Email"
            onChange={emailInputHandler}
            value={userInput.email}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={passwordInputHandler}
            value={userInput.password}
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
