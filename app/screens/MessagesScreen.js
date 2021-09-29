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
import colors from '../config/colors';
import ActivityIndicator from '../components/ActivityIndicator';
import store from '../service/store';

export default function MessagesScreen() {

    const db = app.firestore();

    const [messages,setMessages] = useState([]);
    const [refresh,setRefresh] = useState(false);
    const [input,setInput]  = useState('');
    const [isLoading,setIsLoading]  = useState(true);
    const [user,setUser] = useState('');



    const [todos,setTodos]= useState([]);
    // const [input,setInput]  = useState('');
    // const [uid,setUid]  = useState('');
    

    const setLoad=()=>{
        setIsLoading(false);
    }
    // //TODO: Handle Bug
    useEffect(() => {
      db.collection('users').where('uid','==',app.auth().currentUser.uid).onSnapshot(snapshot=>{
        setMessages(snapshot.docs.filter(function (student) {
          return student.data().uid === app.auth().currentUser.uid;;
      }).
          map( doc=> ({id:doc.id, todo:doc.data().todo}) ))
        setLoad();
        // console.log(snapshot.docs.map( doc=> ({id:doc.id, todo:doc.data().todo}) ));
      });
    }, []);
    

    const handleDelete = (id) =>{
        db.collection('users').doc(id).delete();
    }


  const addTodo = ()=>{
    if(input){
      db.collection("users").add({
        uid: app.auth().currentUser.uid,
        todo: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      setInput('');
    }
  }

  const updateTodo =(id) =>{

    console.log(id)
    if(input){
    db.collection('users').doc(id).set({
        todo: input
    },{merge:true})
    setInput('');
    // {ActivityIndicator visible}
    }
}

const authListener = () =>{
  app.auth().onAuthStateChanged(function(user) {
      if(user){
          setUser(user);
          store.dispatch({
            type:'stateChanged',
            payload:{
              state1:'true',
              user:user,
            }
          });

      }else{
          setUser("");
          store.dispatch({
            type:'stateChanged',
            payload:{
              state1:'false',
            }
          });
          setUser("");
      }
  });
};

useEffect(()=>{
  authListener();
},[]);




    return (
    <Screen  >
        <ActivityIndicator visible={isLoading}></ActivityIndicator>
         <AppTextInput style={styles.textInput} icon="star" placeholder="Write Todo" onChangeText={(input)=>setInput(input)} addTodo={addTodo} FieldValue={input}  ></AppTextInput>
        
        <FlatList
         data={messages}
        keyExtractor={message=>message.id.toString()} 
        renderItem={({item})=>
        
        <ListItem 
        title={item.todo}
        // subTitle={item.Description}
        image={require('../../assets/abc.jpg')}
        onChangeText={(text)=>setInput(text)}
        addTodo={item.id}
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
    },
    textInput:{
      // marginRight:70,
      alignContent:"center",
      marginRight:200,
      paddingRight:100,
    }
})