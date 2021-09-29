import React,{useState,useEffect} from 'react';
import { View, Text,StyleSheet,FlatList } from 'react-native';
import colors from '../config/colors';
import ListItem from './ListItem';
import Screen from './Screen';
import Icon from './Icon';
import ListSeparator from './ListSeparator';

import SingleListItem from './SingleListItem';
import store from '../service/store';
import app from '../config/firebase'

const menuItem=[
    {
        title:"My Todos",
        icon:{
            name:"format-list-bulleted",
            backgroundColor:colors.primary,
        }
    }
]


export default function UserAccount({navigation}) {
  
  const [user,setUser] = useState('');

  const logOut=()=>{
    app.auth().signOut();
      store.dispatch({
        type:'stateChanged',
        payload:{
          state1:'false',
          user:'',
        }
      })
    }
  
  
      const st=(hasAccount)=>{
        setUser(hasAccount);
      }
      store.subscribe(()=>st( store.getState().user));
      


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
          })
          navigation.navigate('Login')
        }
    });
};

useEffect(()=>{
    authListener();
},[]);



  return (
    <Screen>
        <View style={styles.container}>
        <SingleListItem title={"Welcome"} subTitle="saurabh3250@gmail.com" image={require('../../assets/user.png')}></SingleListItem>
        </View>

        <ListSeparator></ListSeparator>

        <View style={styles.container}>
           
            <FlatList data={menuItem} 
            keyExtractor={menuItem =>menuItem.title}
            renderItem={({item})=>
            <SingleListItem title={item.title} ImageComponent={<Icon name={item.icon.name}  backgroundColor={item.icon.backgroundColor} ></Icon>}
            onPress={()=>navigation.navigate('Todos')}
            />
            }
            ></FlatList> 
        </View>
            <SingleListItem  onPress={()=>logOut()} title="LogOut" ImageComponent={<Icon name="logout" backgroundColor="#ffe66d"></Icon>}/>
    </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        marginVertical:20
    }    
})