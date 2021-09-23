import React,{useState} from 'react';
import {StyleSheet, View, Text,Image,TouchableHighlight,Modal,Button,TouchableWithoutFeedback } from 'react-native';
import colors from '../config/colors';
import Swipeable from "react-native-gesture-handler/Swipeable";
import Screen from './Screen';
import AppTextInput from './AppTextInput';
import {AntDesign } from '@expo/vector-icons';


export default function ListItem({title,subTitle,image,onPress, addTodo, renderRightActions,
})

 {
    const [visible,setVisible] = useState(false);

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
            <AppTextInput icon="star" placeholder="Update Todo" onPress={addTodo}  ></AppTextInput>
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