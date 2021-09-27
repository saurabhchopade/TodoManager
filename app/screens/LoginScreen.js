import React,{useEffect,useState} from 'react';
import { View, Text,Image,StyleSheet } from 'react-native';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import store from '../service/store';
import firebase from "firebase";
import SignUpIndicator from '../components/SignUpIndicator'
import app from '../config/firebase'

export default function LoginScreen({navigation}) {

  
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [emailError,setEmailError] = useState('');
  const [user,setUser] = useState('');

  const clearError =()=>{
    setEmailError('');
  }

  const handleLogin=()=>{

      clearError();
      clearError();
      app.auth().signInWithEmailAndPassword(email,password).catch((error)=>{
          // TODO: error handling using error code
          switch(error){
              case "auth/email-already-exists":
                  setEmailError(error.message);
                  console.log(error.message)
                  break;
                  default:
                    setEmailError(error.message);
                    console.log(error.message)
                break;
          }
    });
    
    const st=(hasAccount)=>{
      console.log(hasAccount);
      if(hasAccount==="true"){
        // console.log(user);
        navigation.navigate("AppNavigator");
      }
    }
    store.subscribe(()=>st( store.getState().state1));
  }


  const authListener = () =>{
    app.auth().onAuthStateChanged(function(user) {
        if(user){
            setUser(user);
            store.dispatch({
              type:'stateChanged',
              payload:{
                state1:'true',
                user:user,
              }
            });

        }else{
            setUser("");
        }
    });
};

useEffect(()=>{
    authListener();
},[]);



  return (
      <Screen>
          <Image style={styles.logo} source={require("../../assets/logoFront.png")}></Image>
        <AppTextInput 
        autoCapitalize= "none"
        onChangeText={(text)=>setEmail(text)}
        icon="email" placeholder="Email"></AppTextInput>
        <AppTextInput 
         onChangeText={(text)=>setPassword(text)}
         autoCapitalize= "none"
        icon="account-lock-outline" placeholder="Password"></AppTextInput>
      
        <AppButton title="Login" onPress={()=>{handleLogin(navigation)}} > </AppButton>
        <AppButton title="Login With Google" color="secondary"   > </AppButton>
      
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
    }
})