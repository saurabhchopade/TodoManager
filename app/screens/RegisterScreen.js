import React from 'react';
import { View, Text,StyleSheet,Image } from 'react-native';
import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import colors from '../config/colors';
import store from '../service/store';
import SignUpIndicator from '../components/SignUpIndicator';

import ActivityIndicator from '../components/ActivityIndicator';
 

export default function RegisterScreen({navigation}) {
  
  const handleSignUp=()=>{

    store.dispatch({
      type:'stateChanged',
      payload:{
        state1:'true',
      }
    })
    
    const st=(hasAccount)=>{
      console.log(hasAccount);
      if(hasAccount==="true"){
        navigation.navigate('AppNavigator')
      }
    }
    store.subscribe(()=>st( store.getState().state1));
  }

  return (
    <Screen>
        <Image source={require("../../assets/logoFront.png")} style={styles.logo}></Image>
        <AppTextInput icon="email" placeholder="Email"></AppTextInput>
        <AppTextInput icon="account-lock-outline" placeholder="Password"></AppTextInput>
        <AppButton title="Register" onPress={()=>{handleSignUp()}}> </AppButton>
        <AppButton title="Register With Google" color="secondary"  > </AppButton>
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