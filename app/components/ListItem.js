import React,{useState} from 'react';
import {StyleSheet, View, Text,Image,TouchableHighlight,TouchableWithoutFeedbackComponent,Modal,Button,TouchableWithoutFeedback } from 'react-native';
import colors from '../config/colors';
import Swipeable from "react-native-gesture-handler/Swipeable";
import Screen from './Screen';
import { MaterialCommunityIcons,AntDesign} from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
import app from '../config/firebase'

export default function ListItem({title,image,onPress, addTodo, renderRightActions}) {
  const [visible,setVisible] = useState(false);
  const [input,setInput] = useState('');
  const db = app.firestore();

  const updateTodo =(id) =>{

    console.log(id)
    if(input){
    db.collection('users').doc(id).set({
        todo: input
    },{merge:true})
    setInput('');
    setVisible(false);
    }
}

  return (
      <>
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight  underlayColor={colors.lightGrey} onPress={onPress} >
      <TouchableHighlight underlayColor="none" onPress={()=>setVisible(true)}>
    <View style={styles.container} >
        
        {image&&<Image style={styles.image} source={image}></Image>}
        <View style={styles.textContainer}>
            <Text style={styles.title} 
             >{title} </Text>
        </View>

     </View>
       </TouchableHighlight>
      </TouchableHighlight>
      </Swipeable>

      <Modal visible={visible} animationType="slide" >     
      <Screen>
          <View  style={styles.closeIcon}>
             <AntDesign name="closecircleo" size={24} color={"#E03B8B"} onPress={()=>setVisible(false) } />
            <TextInput 
              value={input}
              onChangeText={(input)=>setInput(input)}
              style={styles.textInput}
              autoCapitalize = "none"
            ></TextInput>
            <MaterialCommunityIcons style={styles.addIcon} name="plus" size={40} onPress={()=>updateTodo(addTodo)} />
          </View>
      </Screen>
        </Modal>
</>
      
  );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        padding:15,
        alignContent:"center",
        alignContent:"center",
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
    textInput:{
      marginTop:20,
      fontSize:18,
      height:50,
      width:300,
    },
    addIcon:{
      marginTop:30,
      marginLeft:30,
      backgroundColor:colors.secondary,
      borderRadius:20,
      alignSelf:"center",
      alignItems:"center",
      alignContent:"center",
    }
})