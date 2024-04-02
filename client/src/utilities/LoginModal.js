import styles from "./LoginModal.module.css";
import AuthContext from "../store/auth-context";
import { useContext } from "react";

const LoginModal = (props) => {
  const ctx = useContext(AuthContext);

  return (
    <>
      <div className={styles.backdrop} onClick={ctx.toggleLoginModalActions}>
        <div className={styles.modal}>
          <header>
            <h2>Login</h2>
          </header>
          <div className={props.content}>
            <p>{props.message}</p>
          </div>
          <footer className={styles.actions}>
            <button>Login</button>
          </footer>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
