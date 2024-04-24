import styles from "./Chatbox.module.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../store/auth-context";
import { useContext, useState, useRef, useEffect } from "react";
import Message from "./Message";
import SendMessage from "./SendMessage";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";

const Chatbox = (props) => {
  const ctx = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [scrollHeight, setScrollHeight] = useState(0);

  const sendMessageHandler = (message) => {
    ctx.firebaseSendMessage(message);
  };

  const messageDisplay =
    ctx.currentUser === null ? (
      <>
        <h2>Need assistant?</h2>
        <p>
          <a
            onClick={() => {
              ctx.setLoginModalActions(true);
            }}
            class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="#">
            Sign in
          </a>{" "}
          to chat with our customer services
        </p>
      </>
    ) : (
      <>
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </>
    );

  const el = document.getElementById("chat-feed");

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "desc"),
      limit(50)
    );

    const unsubcribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages = [];
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });

      const sortedMessages = fetchedMessages.sort(
        (a, b) => a.createdAt - b.createdAt
      );
      setMessages(sortedMessages);

      //This is for auto scroll when having new messages
      if (el !== null && el.scrollHeight !== null) {
        el.scrollTop = el.scrollHeight;
        setScrollHeight(el.scrollTop);
      }
    });
    return () => unsubcribe;
  }, [scrollHeight]);

  return (
    <main className={styles["chatbox-container"]}>
      <div className={styles["chat-bar"]}>
        <div
          className={styles["chat-bar__title"]}
          onClick={props.onMinimizeChatbox}
        >
          <FontAwesomeIcon icon={faHeadset} />
          <span>Customer Support</span>
        </div>

        <button onClick={props.onCloseChatbox}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>

      <div className={styles["chat-window"]} id="chat-feed">
        {messageDisplay}
      </div>
      <SendMessage onSendMessage={sendMessageHandler} user={ctx.currentUser} />
    </main>
  );
};

export default Chatbox;
