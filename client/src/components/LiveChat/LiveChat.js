import { useState } from "react";
import styles from "./LiveChat.module.css";
import LiveChatButton from "./LiveChatButton";
import Chatbox from "./Chatbox";
const LiveChat = () => {
  const [isOpenedChatbox, setIsOpenedChatbox] = useState(false);

  const chatboxHandler = (status) => {
    setIsOpenedChatbox(status);
  };

  return (
    <>
      {isOpenedChatbox ? (
        <Chatbox
          onCloseChatbox={() => {
            chatboxHandler(false);
          }}
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
