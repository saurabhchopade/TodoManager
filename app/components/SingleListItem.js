import React,{useState} from 'react';
import {StyleSheet, View, Text,Image,TouchableHighlight,Modal,Button,TouchableWithoutFeedback } from 'react-native';
import colors from '../config/colors';
import Swipeable from "react-native-gesture-handler/Swipeable";
import Screen from './Screen';
import AppTextInput from './AppTextInput';
import {AntDesign } from '@expo/vector-icons';


export default function SingleListItem({title,ImageComponent,image})
 {

  return (
      <>
    <View style={styles.container} >
        {ImageComponent}
        {image&&<Image style={styles.image} source={image}></Image>}
        <View style={styles.textContainer}>
            <Text style={styles.title} 
             >{title} </Text>
        </View>  
     </View>
</>
      
  );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        padding:15,
        // backgroundColor:"#CAD5E2"
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