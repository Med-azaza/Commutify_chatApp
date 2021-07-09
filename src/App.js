import './styles/App.css';
import React, { useState, useRef, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import SignOut from './components/signout';
import SignIn from './components/signin';
import Chatroom from './components/chatroom';

firebase.initializeApp({
    apiKey: "AIzaSyCkeT8TZAxzm4vjE_NtC6PoVgLxtIlIVTQ",
    authDomain: "commutify-app.firebaseapp.com",
    projectId: "commutify-app",
    storageBucket: "commutify-app.appspot.com",
    messagingSenderId: "454483537825",
    appId: "1:454483537825:web:c9483160f7b634933925e0"
  });
const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <SignOut auth={auth} />
      <div className="container">
        {user ? <Chatroom firestore={firestore} auth={auth} /> : <SignIn auth={auth}/>}
      </div>
    </div>
  );
}

export default App;
