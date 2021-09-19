import React,{useState} from 'react';
import { View, Text,FlatList,SafeAreaView,StyleSheet,Platform,StatusBar,TouchableWithoutFeedback } from 'react-native';
import ListItem from '../components/ListItem';
import Constants from 'expo-constants';
import Screen from '../components/Screen';
import ListSeparator from '../components/ListSeparator';

import ListItemDeleteComponent from '../components/ListItemDeleteComponent';
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
    const [messages,setMessages] = useState(initialMessage);
    const [refresh,setRefresh] = useState(false);

    const handleDelete = (message) =>{
        const newMessages = messages.filter(m=>m.id!==message.id);
        setMessages(newMessages);
    }

    return (
    <Screen>
        <FlatList data={messages}
        keyExtractor={message=>message.id.toString()} 
        renderItem={({item})=>
        
        <ListItem 
        title={item.title}
        subTitle={item.Description}
        image={require('../../assets/abc.jpg')}
        // onPress={()=>console.log("hello")}
        renderRightActions={()=>(
            <ListItemDeleteComponent onPress={()=>handleDelete(item)}></ListItemDeleteComponent>)}
            />
            
        }
        
        ItemSeparatorComponent={ListSeparator}
        refreshing={refresh}
        onRefresh={()=>{setMessages(
            initialMessage
            )}}
            >
        </FlatList> 
    </Screen>
    );
}
