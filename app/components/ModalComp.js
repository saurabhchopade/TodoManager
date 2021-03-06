import React,{useState} from 'react';
import { View, Text,TextInput,StyleSheet,Button} from 'react-native';
import colors from '../config/colors';

export default function ModalComp({icon,placeholder,onChangeText,addTodo,FieldValue}) {
  return (
    <>
    <View style={styles.container}>
      <TextInput 
       onChangeText={onChangeText}
       placeholder={placeholder}
      style={styles.textInput}
      value={FieldValue}
      ></TextInput>
     </View>
    <Button title="ADD" style={styles.addIcon} name="plus"  onPress={addTodo}/>
     </>
  );
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.lightGrey,
    borderRadius:25,
    flexDirection:"row",
    padding:7,
    marginVertical:15,
    alignContent:'center',
    alignItems:"center",
    marginRight:"20%",
    marginLeft:"3%",
  },
  textInput:{
    fontSize:18,
    fontFamily:"Roboto",
    paddingRight:"70",
  },
  icon:{
    marginRight:10,
  },
  addIcon:{
    padding:50,
  }
})