import "../styles/App.css";
import React from "react";
import "firebase/firestore";
import "firebase/auth";

const SignOut = ({ auth }) => {
  return (
    auth.currentUser && (
      <div>
        <button onClick={() => auth.signOut()}>sign out</button>
      </div>
    )
  );
};

export default SignOut;
