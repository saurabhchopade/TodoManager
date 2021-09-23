import React,{useState,useEffect} from 'react';
import { View, Text,FlatList,SafeAreaView,StyleSheet,Platform,StatusBar,TouchableWithoutFeedback } from 'react-native';
import ListItem from '../components/ListItem';
import Constants from 'expo-constants';
import Screen from '../components/Screen';
import ListSeparator from '../components/ListSeparator';
import ListItemDeleteComponent from '../components/ListItemDeleteComponent';
import AppTextInput from '../components/AppTextInput';
import app from '../config/firebase.js'
import firebase from "firebase";
import {MaterialCommunityIcons} from  '@expo/vector-icons'

const initialMessage = [
    {
        id:1,
        title:"WriteSomeCode",
        Description:"MyFirstTodo",
    },
    {
        id:2,
        title:"WriteSomeCode",
        Description:"D1",
    }
]



export default function MessagesScreen() {


    const [messages,setMessages] = useState([]);
    const [refresh,setRefresh] = useState(false);
    const [input,setInput]  = useState('');


    const db = app.firestore();

    const [todos,setTodos]= useState([]);
    // const [input,setInput]  = useState('');
    // const [uid,setUid]  = useState('');
    
    // //TODO: Handle Bug
    useEffect(() => {
      db.collection('users').orderBy('timestamp','desc').onSnapshot(snapshot=>{
        setMessages(snapshot.docs.filter(function (student) {
        //   return student.data().uid === app.auth().currentUser.uid;
          return student.data().uid === "wdFN3AUnUWdom2fsavP3xJdvrvq2";
      }).
          map( doc=> ({id:doc.id, todo:doc.data().todo}) ))
    
        console.log(snapshot.docs.map( doc=> ({id:doc.id, todo:doc.data().todo}) ));
      });
    }, []);
    

    const handleDelete = (id) =>{
        db.collection('users').doc(id).delete();
    }



  const addTodo = ()=>{
    if(input){
      db.collection("users").add({
      //   uid: app.auth().currentUser.uid,
        uid: "wdFN3AUnUWdom2fsavP3xJdvrvq2",
        todo: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      setInput('');
    }
  }


    return (
    <Screen  >
         <AppTextInput icon="star" placeholder="Write Todo" onChangeText={(text)=>setInput(text)} addTodo={addTodo} FieldValue={input}  ></AppTextInput>
         {/* <MaterialCommunityIcons style={styles.icon} name="plus" size={5} onPress={addTodo}/> */}
        <FlatList
         data={messages}
        keyExtractor={message=>message.id.toString()} 
        renderItem={({item})=>
        
        <ListItem 
        title={item.todo}
        // subTitle={item.Description}
        image={require('../../assets/abc.jpg')}

        renderRightActions={()=>(
            <ListItemDeleteComponent onPress={()=>handleDelete(item.id)}></ListItemDeleteComponent>)
        }
            />
            
        }
        
        ItemSeparatorComponent={ListSeparator}
        // refreshing={refresh}
        // onRefresh={()=>{setMessages(
        //     initialMessage
        //     )}}
            >
        </FlatList> 
    </Screen>
    );
}

const styles = StyleSheet.create({
    icon:{
        alignSelf:"center"
    }
})