import styles from "./Chatbox.module.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import TextareaAutosize from "react-textarea-autosize";

const Chatbox = (props) => {
  return (
    <main className={styles["chatbox-container"]}>
      <div className={styles["chat-bar"]}>
        <button onClick={props.onCloseChatbox}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      <div className={styles["chat-window"]}>
        <h2>Need assistant?</h2>
        <p>Sign in to chat with our customer services</p>
      </div>
      <div className={styles["chat-actions"]}>
        <TextareaAutosize maxRows={2} />
        <button>
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </main>
  );
};

export default Chatbox;
