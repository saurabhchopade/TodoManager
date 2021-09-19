import React from 'react';
import { View, Text,Image,StyleSheet } from 'react-native';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
export default function LoginScreen() {
  return (
      <Screen>
          <Image style={styles.logo} source={require("../../assets/logoFront.png")}></Image>
        <AppTextInput icon="email" placeholder="Email"></AppTextInput>
        <AppTextInput icon="account-lock-outline" placeholder="Password"></AppTextInput>
        <AppButton title="Login"> </AppButton>
        <AppButton title="Login With Google" color="secondary"  > </AppButton>
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