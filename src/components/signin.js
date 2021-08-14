import "../styles/App.css";
import React from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const SignIn = ({ auth }) => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <div>
      <button onClick={signInWithGoogle}>sign in with google</button>
    </div>
  );
};
export default SignIn;
