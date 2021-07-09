import '../styles/App.css';
import React, { useState, useRef, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const SignIn = ({ auth }) => {
    console.log(auth);
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
    return (
        <div>
            <button onClick={signInWithGoogle}>sign in with google</button>
        </div>
    )
}
export default SignIn;