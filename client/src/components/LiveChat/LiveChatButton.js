import styles from "./LiveChatButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";

const LiveChatButton = (props) => {
  return (
    <button onClick={props.onClick} className={styles["live-button"]}>
      <FontAwesomeIcon icon={faHeadset} size="2x" />
    </button>
  );
};

export default LiveChatButton;
