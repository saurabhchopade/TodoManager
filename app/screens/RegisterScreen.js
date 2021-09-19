import React from 'react';
import { View, Text,StyleSheet,Image } from 'react-native';
import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import colors from '../config/colors';

export default function RegisterScreen() {
  return (
    <Screen>
        <Image source={require("../../assets/logoFront.png")} style={styles.logo}></Image>
        <AppTextInput icon="email" placeholder="Email"></AppTextInput>
        <AppTextInput icon="account-lock-outline" placeholder="Password"></AppTextInput>
        <AppButton title="Register"> </AppButton>
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