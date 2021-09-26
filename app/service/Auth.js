import React,{useState,useEffect} from 'react';
import app from '../config/firebase.js'
import firebase from "firebase";
import { View, Text } from 'react-native';

import store from './store.js';

export default function Auth() {
    
    console.log(store);

    const db = app.firestore();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [user,setUser] = useState('');
    const [emailError,setEmailError] = useState('');
    const [hasAccount,setHasAccount] = useState(true);

    setHasAccount(false);
    const clearInputs =()=>{
        setEmail('');
        setPassword('');
    }
    
    const clearError =()=>{
        setEmailError('');
    }
    
    const  handleLogin =()=>{
        clearError();
        app.auth().signInWithEmailAndPassword(email,password).catch((error)=>{
            // TODO: error handling using error code
            switch(error){
                case "auth/email-already-exists":
                    setEmailError(error.message);
                    break;
              default:
                  setEmailError(error.message);
                  break;
            }
      });};
    
    const handelSignUp =()=>{
      clearError();
      app.auth().createUserWithEmailAndPassword(email,password)
      .then(cred=>{
              db.collection('users').doc(cred.user.uid).set({
                  todo: "Welcome"+" : "+app.auth().currentUser.email,
                  timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                  uid: app.auth().currentUser.uid
              });
      })
      .catch((error)=>{
          // TODO: error handling using error code
                  setEmailError(error.message);
      });};
    
    const authListener = () =>{
      app.auth().onAuthStateChanged(function(user) {
          if(user){
              clearInputs();
              setUser(user);
          }else{
              setUser("");
          }
      });
    };
    
    useEffect(()=>{
      authListener();
    },[]);
    
    const auth = firebase.auth();
    const googleProvider = new firebase.auth.GoogleAuthProvider()
    
    const signInWithGoogle = () => {
      auth.signInWithPopup(googleProvider).then((res) => {
          console.log(res.user)
      }).catch((error) => {
          setEmailError(error.message);
      })
    };
}


