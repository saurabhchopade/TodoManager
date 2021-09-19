import React,{useState} from 'react';
import { View, Text,TextInput,StyleSheet } from 'react-native';
import { MaterialCommunityIcons,AntDesign } from '@expo/vector-icons';
import colors from '../config/colors';

export default function AppTextInput({icon,placeholder}) {
  const [textInputValue, setTextInputValue] = useState('');

  // console.log(textInputValue);

  return (
    <View style={styles.container}>
      {icon&&<MaterialCommunityIcons name={icon} size={20} color={"#758283"}  style={styles.icon}></MaterialCommunityIcons>}
      <TextInput 
       onChangeText={text => setTextInputValue(text)}
       value={textInputValue}
        onKeyPress={ 
          ()=>clearImmediate
        }
       placeholder={placeholder} 
      style={styles.textInput} ></TextInput>
     </View>
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
  },
  icon:{
    marginRight:10,
  }
})