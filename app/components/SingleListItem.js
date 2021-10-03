import React,{useState} from 'react';
import {StyleSheet, View, Text,Image,TouchableHighlight,Modal,Button,TouchableWithoutFeedback } from 'react-native';
import colors from '../config/colors';
import Swipeable from "react-native-gesture-handler/Swipeable";
import Screen from './Screen';
import AppTextInput from './AppTextInput';
import {AntDesign } from '@expo/vector-icons';
import { TouchableWithoutFeedbackBase } from 'react-native';

export default function SingleListItem({title,ImageComponent,image,onPress})
 {

  return (
      <>
    <View style={styles.container}>
        {ImageComponent}
        {image&&<Image style={styles.image} source={image}></Image>}
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.textContainer}>
            <Text style={styles.title} 
             >{title} </Text>
        </View>  
             </TouchableWithoutFeedback>
     </View>
</>     
  );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        padding:15,
    },
    textContainer:{
        marginLeft:10,
        justifyContent:"center"
    },
    image:{
        width:70,
        height:70,
        borderRadius:35, 
        marginRight:10,
    },
    title: {
        fontWeight:"500",
        fontSize:18
    },
    subTitle:{
         color:colors.lightGrey
    },
    closeIcon:{
        alignItems:"center",
        justifyContent:"center",
    },
})