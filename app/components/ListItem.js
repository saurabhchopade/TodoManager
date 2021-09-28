import React,{useState} from 'react';
import {StyleSheet, View, Text,Image,TouchableHighlight,Modal,Button,TouchableWithoutFeedback } from 'react-native';
import colors from '../config/colors';
import Swipeable from "react-native-gesture-handler/Swipeable";
import Screen from './Screen';
import AppTextInput from './AppTextInput';
import { MaterialCommunityIcons,AntDesign} from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
import app from '../config/firebase'

export default function ListItem({title,subTitle,image,onPress, addTodo, renderRightActions,onChangeText,
})

 {
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
      <TouchableHighlight underlayColor={colors.lightGrey} onPress={onPress} >
    <View style={styles.container} >
        
        {/* If image is then and then only it render for todo logo*/}

        {image&&<Image style={styles.image} source={image}></Image>}
        

        <View style={styles.textContainer}>
            <Text style={styles.title} 
            onPress={()=>setVisible(true)} >{title} </Text>
            {/* We Dont Want Subtitle in User: Component reusable */}
            {/* {subTitle&&<Text style={styles.subTitle}>{subTitle}</Text>} */}
        </View>


     </View>
      </TouchableHighlight>
      </Swipeable>

    {/* Modal For Update  get open when click on todo text*/}
      <Modal visible={visible} animationType="slide" >     
      <Screen>
          <View  style={styles.closeIcon}>


             <AntDesign name="closecircleo" size={24} color={"#E03B8B"} onPress={()=>setVisible(false) } />
            {/* <AppTextInput icon="star" placeholder="Update Todo" addTodo={addTodo} onChangeText={onChangeText}  ></AppTextInput> */}


            <TextInput 

              // label="E"
              value={input}
              // onChangeText={text => setText(text)}

              onChangeText={(input)=>setInput(input)}
            //  placeholder="Update Todo"
              style={styles.textInput}
              autoCapitalize = "none"
            // value={FieldValue}
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
    textInput:{
      marginTop:20,
      fontSize:18,
      // marginRight:"20%",
      // marginLeft:"20%",
      height:50,
      width:300,
      // fontFamily:"Roboto",
      // paddingRight:70,
    },
    addIcon:{
      // marginRight:10,
      marginTop:30,
      marginLeft:30,
      backgroundColor:colors.secondary,
      borderRadius:20,
      alignSelf:"center",
      alignItems:"center",
      alignContent:"center",

      // padding:10
      // alignSelf:"center"
    }
})