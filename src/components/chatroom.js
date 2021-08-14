import "../styles/App.css";
import React, { useState, useRef, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import SignOut from "./signout";

import Msg from "./msg";

const Chatroom = ({ firestore, auth }) => {
  let day = "";
  const dummy = useRef();
  const [formValue, setFormValue] = useState("");
  const scroll = () => {
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };
  console.log(auth.currentUser);
  const sendMessage = async (e) => {
    e.preventDefault();
    const { displayName, uid, photoURL } = auth.currentUser;
    await messagesRef.add({
      user: displayName,
      body: formValue,
      createdAt: new Date().toString(),
      firbaseTimestamp: firebase.firestore.FieldValue.serverTimestamp(),
      uid: uid,
      photoURL: photoURL,
    });
    setFormValue("");
    scroll();
  };

  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("firbaseTimestamp", "asc").limitToLast(30);
  const [messages] = useCollectionData(query, { idField: "id" });
  useEffect(() => {
    scroll();
  }, [messages]);

  return (
    <div className="Chatroom">
      <div className="header">
        <div>
          <button>
            <i className="fas fa-arrow-left"></i>
          </button>
        </div>
        <div>
          <h6>Commutify</h6>
        </div>
        <div>
          <SignOut auth={auth} />
        </div>
      </div>
      <div className="main">
        {messages &&
          messages.map((msg) => {
            if (msg.createdAt.split(" ")[2] !== day) {
              day = msg.createdAt.split(" ")[2];
              return (
                <Msg
                  day={true}
                  key={msg.id}
                  message={msg}
                  myMessage={auth.currentUser.uid === msg.uid ? true : false}
                />
              );
            } else {
              return (
                <Msg
                  day={false}
                  key={msg.id}
                  message={msg}
                  myMessage={auth.currentUser.uid === msg.uid ? true : false}
                />
              );
            }
          })}
        <span ref={dummy}></span>
      </div>
      <form className="msg-form" onSubmit={sendMessage}>
        <div>
          <input
            type="text"
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            placeholder="Say something"
          />
          <button type="submit" disabled={!formValue}>
            <i className="far fa-paper-plane"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chatroom;
