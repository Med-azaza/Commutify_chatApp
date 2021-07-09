import '../styles/App.css';
import React, { useState, useRef, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import Msg from './msg';

const Chatroom = ({ firestore, auth }) => {
    const [formValue, setFormValue] = useState('');
    const sendMessage = async (e) => {
    e.preventDefault();
        const { displayName, uid, photoURL } = auth.currentUser;
        await messagesRef.add({
            user: displayName,
            body: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid: uid,
            photoURL: photoURL
        });
        setFormValue('');
        scroll();
    }
    const dummy = useRef();
    const scroll = () => {
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }

    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt', 'asc').limitToLast(30);
    const [messages] = useCollectionData(query, { idField: 'id' });

    return (
        <div className='Chatroom'>
            <div>
                {messages && messages.map(msg => <Msg key={msg.id} message={msg} />)}
                <span ref={dummy}></span>
            </div>
            <form onSubmit={sendMessage}>
                <input  type="text" value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder='Say something' />
                <button type='submit' disabled={!formValue} ></button>
            </form>
        </div>
    )
}

export default Chatroom;