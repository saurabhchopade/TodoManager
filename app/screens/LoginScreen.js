import React,{useEffect,useState} from 'react';
import { View, Text,Image,StyleSheet} from 'react-native';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import store from '../service/store';
import firebase from "firebase";
import SignUpIndicator from '../components/SignUpIndicator'
import app from '../config/firebase'
import colors from '../config/colors';
import { getAuth,onAuthStateChanged, signInWithCredential, GoogleAuthProvider } from "firebase/auth";
import * as Google from 'expo-google-app-auth';
// import { Google } from 'expo';

export default function LoginScreen({navigation}) {

  
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [emailError,setEmailError] = useState('');
  const [user,setUser] = useState('');
  const [visible,setVisible] = useState(false);

  const clearError =()=>{
    setEmailError('');
  }

  const handleLogin=()=>{
    console.log("handleLogin");
    clearError();
    setVisible(true);
      app.auth().signInWithEmailAndPassword(email,password).catch((error)=>{
          // TODO: error handling using error code
          switch(error){
              case "auth/email-already-exists":{
                setVisible(false);
                setEmailError(error.message);
                console.log(error.message)
              }
                break;
              default:{

                setVisible(false);
                setEmailError(error.message);
                console.log(error.message)
              }
               break;
          }
    });
    
  }
  
 const  isUserEqual=(googleUser, firebaseUser)=>{
    if (firebaseUser) {
      const providerData = firebaseUser.providerData;
      for (let i = 0; i < providerData.length; i++) {
        if (providerData[i].providerId === GoogleAuthProvider.PROVIDER_ID &&
            providerData[i].uid === googleUser.getBasicProfile().getId()) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  }
   const onSignIn=(googleUser)=> {
    navigation.navigate("AppNavigator");

    console.log('Google Auth Response', googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      unsubscribe();
      // Check if we are already signed-in Firebase with the correct user.
      if (!isUserEqual(googleUser, firebaseUser)) {
      
        // Build Firebase credential with the Google ID token.
        const credential = GoogleAuthProvider.credential(
          googleUser.idToken,
          googleUser.accessToken
        );            
  
        // Sign in with credential from the Google user.
        signInWithCredential(auth, credential).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The credential that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
      } else {
        console.log('User already signed-in Firebase.');
      }
    });
  }


  async function signInWithGoogleAsync() {
    try {
      const result = await Google.logInAsync({
        behavior:"web",
        androidClientId: '900579344446-nbdoq709lqi1f96btideunksf5jo32hq.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });
  
      if (result.type === 'success') {
        console.log("Success")
        onSignIn(result);
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }

  

  const st=(hasAccount)=>{
    console.log(hasAccount);
    clearError();
    if(hasAccount==="true"){
      navigation.navigate("AppNavigator");
    }
  }

  store.subscribe(()=>st( store.getState().state1));
  
  const authListener = () =>{
    app.auth().onAuthStateChanged(function(user) {
        if(user){
            setUser(user);
            setVisible(false);
            clearError();
            store.dispatch({
              type:'stateChanged',
              payload:{
                state1:'true',
                user:user,
              }
            });

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
        <SignUpIndicator visible={visible}></SignUpIndicator>
          <Image style={styles.logo} source={require("../../assets/logoFront.png")}></Image>
        <AppTextInput 
        autoCapitalize= "none"
        onChangeText={(email)=>setEmail(email)}
        icon="email" placeholder="Email"></AppTextInput>
        {/* FieldValue={email} */}
        <AppTextInput 
        // FieldValue={password}
         onChangeText={(password)=>setPassword(password)}
         autoCapitalize= "none"
        icon="account-lock-outline" placeholder="Password"></AppTextInput>
      
        <AppButton title="Login" onPress={()=>handleLogin()} > </AppButton>
        <AppButton title="Login With Google" color="secondary" onPress={()=> signInWithGoogleAsync()}  > </AppButton>
       
       <View style={styles.error}>
        <Text style={styles.text}>{"Don't Have and Account?"}</Text>
        <Text style={styles.pageChange} onPress={()=>navigation.navigate("Register")}>{"SignUp"}</Text>
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
      // alignSelf:"center",
      color:colors.primary,
      flexDirection:"row",
      alignContent:"center",
      alignSelf:"center",
      alignItems:"center",
    },
    pageChange:{
      color:colors.secondary,
      alignContent:"center",
    },
    text:{
      color:colors.greyOne
    }
})