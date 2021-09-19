import React from 'react';
import {Text,StyleSheet, TouchableOpacity } from 'react-native';

import colors from '../config/colors';

export default function AppButton({title,onPress,color="primary"}) {
  return (
  <TouchableOpacity style={[styles.button,{backgroundColor:colors[color]}]} onPress={onPress} >
      <Text style={styles.text}>{title}</Text>
  </TouchableOpacity> 
  
  );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: colors.primary,
        borderRadius:25,
        justifyContent:"center",
        alignItems:"center",
        padding:10,
        // width:"100%",
        marginRight:"2%",
        marginLeft:"2%",
        marginVertical:10,
    },
    text:{
        color:colors.white,
        fontSize:15,
        textTransform:"uppercase",
        fontWeight:"bold",
    }
})
