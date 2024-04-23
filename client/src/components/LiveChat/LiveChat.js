import { useState } from "react";
import styles from "./LiveChat.module.css";
import LiveChatButton from "./LiveChatButton";
import Chatbox from "./Chatbox";
import { db } from "../../firebase/firebase-config";

const LiveChat = () => {
  const [isOpenedChatbox, setIsOpenedChatbox] = useState(false);

  const chatboxHandler = (status) => {
    setIsOpenedChatbox(status);
  };

  const closeChatboxHandler = () => {
    db.collection("messages").map((message) => message.delete);
  };
  return (
    <>
      {isOpenedChatbox ? (
        <Chatbox
          onMinimizeChatbox={() => {
            chatboxHandler(false);
          }}
          onCloseChatbox={closeChatboxHandler}
        />
      ) : (
        <LiveChatButton
          onClick={() => {
            chatboxHandler(true);
          }}
        />
      )}
    </>
  );
};

export default LiveChat;
