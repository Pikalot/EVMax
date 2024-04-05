import styles from "./Chatbox.module.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import TextareaAutosize from "react-textarea-autosize";
import AuthContext from "../../store/auth-context";
import { useContext, useState } from "react";
import Message from "./Message";

const Chatbox = (props) => {
  const ctx = useContext(AuthContext);
  const [message, setMessage] = useState("");

  const submitHandler = () => {
    if (message.trim() === "") return;
    ctx.firebaseSendMessage(message);
    setMessage("");
  };

  return (
    <main className={styles["chatbox-container"]}>
      <div className={styles["chat-bar"]}>
        <button onClick={props.onCloseChatbox}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>

      <div className={styles["chat-window"]}>
        {ctx.currentUser === null ? (
          <>
            <h2>Need assistant?</h2>
            <p>
              <a
                onClick={() => {
                  ctx.setLoginModalActions(true);
                }}
              >
                Sign in
              </a>{" "}
              to chat with our customer services
            </p>
          </>
        ) : (
          <Message />
        )}
      </div>

      <div className={styles["chat-actions"]}>
        <TextareaAutosize
          maxRows={2}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
          value={message}
        />
        <button type="button" onClick={submitHandler}>
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </main>
  );
};

export default Chatbox;
