import React from 'react';
import { View,TextInput,StyleSheet} from 'react-native';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import colors from '../config/colors';


export default function AppTextInput({icon,placeholder,onChangeText,addTodo,FieldValue,autoCapitalize}) {

  return (
    <>
    <View style={styles.container}>
      {icon&&<MaterialCommunityIcons name={icon} size={20} color={"#758283"}  style={styles.icon}></MaterialCommunityIcons>}
     
      <TextInput 
       onChangeText={onChangeText}
       placeholder={placeholder}
      style={styles.textInput}
      autoCapitalize = {autoCapitalize}
      value={FieldValue}
      ></TextInput>

      {addTodo&&<MaterialCommunityIcons style={styles.addIcon} name="plus" size={40} onPress={addTodo} />}
     </View>

     </>
  );
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.lightGrey,
    borderRadius:25,
    flexDirection:"row",
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
    marginRight:"40%",
  },
  icon:{
    marginRight:10,
  },
  addIcon:{
    backgroundColor:colors.secondary,
    borderRadius:20,
  }
})