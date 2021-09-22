import React from 'react';
import { View, Text,StyleSheet,FlatList } from 'react-native';
import colors from '../config/colors';
import ListItem from './ListItem';
import Screen from './Screen';
import Icon from './Icon';
import ListSeparator from './ListSeparator';

import SingleListItem from './SingleListItem';

const menuItem=[
    {
        title:"My Todos",
        icon:{
            name:"format-list-bulleted",
            backgroundColor:colors.primary,
        }
    }
]

export default function UserAccount() {
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
            <SingleListItem title={item.title} ImageComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} ></Icon>}/>
            }
            ></FlatList> 
        </View>
            <SingleListItem title="LogOut" ImageComponent={<Icon name="logout" backgroundColor="#ffe66d"></Icon>}/>
    </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        marginVertical:20
    }    
})