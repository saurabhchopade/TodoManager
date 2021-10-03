import React from 'react';
import { Text,View,ImageBackground,StyleSheet,Image } from 'react-native';
import AppButton from '../components/AppButton';

function Welcome({navigation}) {
    return (
        <ImageBackground 
        blurRadius={2}
        style={styles.background}
        source={require("../../assets/img.jpeg")}
        >
        <View style={styles.logoContainer}>
        </View>
       <View style={styles.buttonContainer}>
        <AppButton title="Login" onPress={()=>navigation.navigate('Login')}></AppButton>
        <AppButton title="Register"  color="secondary" onPress={()=>navigation.navigate('Register')}></AppButton>
        </View>

        </ImageBackground>
    );
}

export default Welcome;

const styles = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent:"flex-end",
        alignItems:'center',
        
    },
    logo:{
        width:100,
        height:100,
    },
    logoContainer:{
        position:"absolute",
        top:70,
        alignItems:"center"
    },
    buttonContainer:{
        width:"100%"
    },
    tagline:{
        fontSize:25,
        fontWeight:"100",
    }
})
