import AuthContext from "../../store/auth-context";
import { useContext } from "react";
import styles from "./Message.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Message = (props) => {
  const ctx = useContext(AuthContext);
  const user = ctx.currentUser;

  return (
    <div
      className={`${styles["chat-bubble"]} ${
        props.message.uid === user.uid ? styles.right : styles.left
      }`}
    >
      <div className={styles["user-info"]}>
        <FontAwesomeIcon icon={faUser} />
        <p className={styles["user-name"]}>{props.message.name}</p>
      </div>
      <p className={styles["user-message"]}>{props.message.text}</p>
    </div>
  );
};

export default Message;
