import React,{useState,useEffect} from 'react';
import { View, Text,StyleSheet,Image } from 'react-native';
import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import colors from '../config/colors';
import store from '../service/store';
import SignUpIndicator from '../components/SignUpIndicator';

import ActivityIndicator from '../components/ActivityIndicator';
import firebase from "firebase";
import app from '../config/firebase'
import RegisterIndicator from '../components/RegisterIndicator';



export default function RegisterScreen({navigation}) {
  
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [emailError,setEmailError] = useState('');
  // const [user,setUser] = useState('');
  const [visible,setVisible] = useState(false);

  const clearError =()=>{
    setEmailError('');
  }

  const handleSignUp=()=>{
      clearError();
      setVisible(true);
      clearError();
      app.auth().createUserWithEmailAndPassword(email,password)
      .then(cred=>{
              db.collection('users').doc(cred.user.uid).set({
                  todo: "Welcome"+" : "+app.auth().currentUser.email,
                  timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                  uid: app.auth().currentUser.uid
              });
        store.dispatch({
        type:'stateChanged',
        payload:{
          state1:'true',
        }
      })
      setVisible(false);
      })
      .catch((error)=>{
          // TODO: error handling using error code
                  setVisible(false);
                  setEmailError(error.message);
                  console.log(error.message);
      });
    

    // if(emailError === ''){
      // console.log("Logged")

      // store.dispatch({
      //   type:'stateChanged',
      //   payload:{
      //     state1:'true',
      //   }
      // })
      // console.log(user);
      // setVisible(false);
      // navigation.navigate('Login')
    // }
    
    // const st=(hasAccount)=>{
    //   console.log(hasAccount);
    //   if(hasAccount==="true"){
    //     navigation.navigate('Login')
    //   }
    // }
    // store.subscribe(()=>st( store.getState().state1));
  }


  const authListener = () =>{
    app.auth().onAuthStateChanged(function(user) {
        if(user){
            // clearInputs();
            // setUser(user);
        }else{
            setUser("");
            store.dispatch({
              type:'stateChanged',
              payload:{
                state1:'false',
              }
            })
        }
    });
};

useEffect(()=>{
    authListener();
},[]);

  return (
    <Screen>
      <RegisterIndicator visible={visible} ></RegisterIndicator>
      <RegisterIndicator visible={visible}></RegisterIndicator>
        <Image source={require("../../assets/logoFront.png")} style={styles.logo}></Image>
        <AppTextInput
          autoCapitalize= "none"
          onChangeText={(text)=>setEmail(text)}
           icon="email" placeholder="Email"></AppTextInput>
        <AppTextInput
          onChangeText={(text)=>setPassword(text)}
          autoCapitalize= "none"
        icon="account-lock-outline" placeholder="Password"></AppTextInput>
        <AppButton title="Register" onPress={()=>{handleSignUp()}}> </AppButton>
        <AppButton title="Register With Google" color="secondary"  > </AppButton>
        <Text style={styles.error}>{emailError}</Text>
      </Screen>
  );
  
}


const styles = StyleSheet.create({
    logo:{
        height:70,
        width:70,
        borderRadius:35,
        alignSelf:"center",
        marginTop:50,
        marginBottom:30
    },
    error:{
      alignSelf:"center",
      color:colors.primary,
      marginRight:"5%",
      marginLeft:"5%"
    }
})