import { useState, useContext, useEffect } from "react";
import styles from "./LiveChat.module.css";
import LiveChatButton from "./LiveChatButton";
import Chatbox from "./Chatbox";
import { db } from "../../firebase/firebase-config";
import { doc, deleteDoc, getDocs, collection, addDoc, query, where } from "firebase/firestore";
import AuthContext from "../../store/auth-context";
const LiveChat = () => {
  const [isOpenedChatbox, setIsOpenedChatbox] = useState(false);
  const [roomCreated, setRoomCreated] = useState(false);
  const ctx = useContext(AuthContext);

  const chatboxHandler = (status) => {
    setIsOpenedChatbox(status);
    if (status && ctx.currentUser !== null && !roomCreated) {
      createNewRoom();
    }
  };

  const closeChatboxHandler = async () => {
    setIsOpenedChatbox(false);
  };
  
  useEffect(() => {
    // Check if the room has already been created for the current user
    const checkRoomExists = async () => {
      if (ctx.currentUser !== null) {
        const q = query(
          collection(db, "Rooms"),
          where("userId", "==", ctx.currentUser.uid)
        );
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          setRoomCreated(true);
        } else {
          setRoomCreated(false); // Reset to false if no room exists
        }
      } else {
        setRoomCreated(false); // Reset to false if currentUser is null
      }
    };

    checkRoomExists();
  }, [ctx.currentUser]);

  const createNewRoom = async () => {
    try {
      // Create a new room document in the "Rooms" collection
      const roomRef = await addDoc(collection(db, "Rooms"), {
        name: "New Room", // You can set default room name
        createdAt: new Date().toISOString(), // Set current timestamp
        userId: ctx.currentUser.uid // Associate the room with the current user
      });
      console.log("New room created with ID: ", roomRef.id);
      setRoomCreated(true);
      // Create a new message document in the "Messages" collection associated with the new room
    } catch (error) {
      console.error("Error creating room or message: ", error);
    }
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
