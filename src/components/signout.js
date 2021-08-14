import "../styles/App.css";
import React from "react";
import "firebase/firestore";
import "firebase/auth";

const SignOut = ({ auth }) => {
  return (
    auth.currentUser && (
      <div>
        <button onClick={() => auth.signOut()}>
          <i className="fas fa-sign-out-alt"></i>
        </button>
      </div>
    )
  );
};

export default SignOut;
