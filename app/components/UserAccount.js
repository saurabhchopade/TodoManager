import React from 'react';
import { View, Text,StyleSheet,FlatList } from 'react-native';
import colors from '../config/colors';
import ListItem from './ListItem';
import Screen from './Screen';
import Icon from './Icon';
import ListSeparator from './ListSeparator';

import SingleListItem from './SingleListItem';
import store from '../service/store';

const menuItem=[
    {
        title:"My Todos",
        icon:{
            name:"format-list-bulleted",
            backgroundColor:colors.primary,
        }
    }
]

const logOut=(nav)=>{
    store.dispatch({
      type:'stateChanged',
      payload:{
        state1:'false',
      }
    })
    nav.navigate('Welcome')
  }

export default function UserAccount({navigation}) {
  return (
    <Screen>
        <View style={styles.container}>
        <SingleListItem title="Saurabh" subTitle="saurabh3250@gmail.com" image={require('../../assets/user.png')}></SingleListItem>
        </View>

        <ListSeparator></ListSeparator>

        <View style={styles.container}>
           
            <FlatList data={menuItem} 
            keyExtractor={menuItem =>menuItem.title}
            renderItem={({item})=>
            <SingleListItem title={item.title} ImageComponent={<Icon name={item.icon.name}  backgroundColor={item.icon.backgroundColor} ></Icon>}
            onPress={()=>navigation.navigate('MessagesScreen')}
            />
        
            }
            ></FlatList> 
        </View>
            <SingleListItem  onPress={()=>{logOut(navigation)}} title="LogOut" ImageComponent={<Icon name="logout" backgroundColor="#ffe66d"></Icon>}/>
    </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        marginVertical:20
    }    
})