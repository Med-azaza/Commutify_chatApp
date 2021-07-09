import '../styles/App.css';
import React, { useState, useRef, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const SignOut = ({auth}) => {
    return auth.currentUser && (
        <div>
            <button onClick={()=> auth.signOut()}>sign out</button>
        </div>
    )
}

export default SignOut;