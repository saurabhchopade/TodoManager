import React,{useEffect} from 'react';
import { View, Text,Image,StyleSheet } from 'react-native';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import store from '../service/store';

export default function LoginScreen({navigation}) {

  
  
  const handleLogin=(nav)=>{
    console.log("ds");
    store.dispatch({
      type:'stateChanged',
      payload:{
        state1:'true',
      }
    })
    
    const un = store.subscribe(()=>st( store.getState().state1));
    un();
    const st=(hasAccount)=>{
      if(hasAccount){
        nav.navigate('AppNavigator')
      }
    }
  }


  return (
      <Screen>
          <Image style={styles.logo} source={require("../../assets/logoFront.png")}></Image>
        <AppTextInput icon="email" placeholder="Email"></AppTextInput>
        <AppTextInput icon="account-lock-outline" placeholder="Password"></AppTextInput>
      
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