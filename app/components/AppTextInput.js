import React,{useState} from 'react';
import { View, Text,TextInput,StyleSheet} from 'react-native';
import { MaterialCommunityIcons,AntDesign} from '@expo/vector-icons';
import colors from '../config/colors';
import { TouchableHighlight } from 'react-native-gesture-handler';


export default function AppTextInput({icon,placeholder,onChangeText,addTodo,FieldValue}) {
  const [textInputValue, setTextInputValue] = useState('');


  return (
    <>
    <View style={styles.container}>
      {icon&&<MaterialCommunityIcons name={icon} size={20} color={"#758283"}  style={styles.icon}></MaterialCommunityIcons>}
      <TextInput 
       onChangeText={onChangeText}
       placeholder={placeholder}
      style={styles.textInput}
      value={FieldValue}
      ></TextInput>
      {addTodo&&<MaterialCommunityIcons style={styles.addIcon} name="plus" size={30} onPress={addTodo}/>}
     </View>
     </>
  );
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.lightGrey,
    borderRadius:25,
    flexDirection:"row",
    // width:"100%",
    padding:10,
    marginVertical:15,
    alignContent:'center',
    alignItems:"center",
    marginRight:"2%",
    marginLeft:"2%",
  },
  textInput:{
    fontSize:18,
    fontFamily:"Roboto",
    paddingRight:70,
  },
  icon:{
    marginRight:10,
  },
  addIcon:{
    // marginRight:10,
    marginTop:5,
    marginLeft:30,
    // padding:10
    // alignSelf:"center"
  }
})