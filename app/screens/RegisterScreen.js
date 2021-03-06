import React,{useState,useEffect} from 'react';
import { View, Text,StyleSheet,Image } from 'react-native';
import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import colors from '../config/colors';
import store from '../service/store';
import firebase from "firebase";
import app from '../config/firebase'
import RegisterIndicator from '../components/RegisterIndicator';

export default function RegisterScreen({navigation}) {
  
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [emailError,setEmailError] = useState('');
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
  }


  const authListener = () =>{
    app.auth().onAuthStateChanged(function(user) {
        if(user){
        }else{
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
          onChangeText={(email)=>setEmail(email)}
           icon="email" placeholder="Email"></AppTextInput>
        <AppTextInput
          onChangeText={(password)=>setPassword(password)}
          autoCapitalize= "none"
        icon="account-lock-outline" placeholder="Password"></AppTextInput>
        <AppButton title="Register" onPress={()=>{handleSignUp()}}> </AppButton>
       
        <View style={styles.error}>
          <Text style={styles.text}>{"Already Have am Account?"}</Text>
          <Text style={styles.pageChange} onPress={()=>navigation.navigate("Login")}>{"SignIn"}</Text>
        </View>
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
        color:colors.primary,
        flexDirection:"row",
        alignContent:"center",
        alignSelf:"center",
        alignItems:"center",
    },pageChange:{
      color:colors.secondary,
      alignContent:"center",
    },
    text:{
      color:colors.greyOne
    }
})