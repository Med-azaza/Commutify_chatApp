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
    <div onClick={signInWithGoogle} className="signin">
      <div>
        <i className="fab fa-google"></i>
      </div>
      Sign in with google
    </div>
  );
};
export default SignIn;
