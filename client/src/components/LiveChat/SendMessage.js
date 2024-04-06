import styles from "./SendMessage.module.css";
import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const SendMessage = (props) => {
  const [message, setMessage] = useState("");

  const submitHandler = () => {
    if (message.trim() === "") return;
    props.onSendMessage(message);
    setMessage("");
  };

  return (
    <div className={styles["chat-actions"]}>
      <TextareaAutosize
        maxRows={2}
        onChange={(event) => {
          setMessage(event.target.value);
        }}
        value={message}
        disabled={props.user === null}
        style={{ height: "100%" }}
      />
      <button
        type="button"
        onClick={submitHandler}
        disabled={props.user === null}
      >
        <FontAwesomeIcon icon={faPaperPlane} />
      </button>
    </div>
  );
};

export default SendMessage;
