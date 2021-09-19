import React,{useState} from 'react';

import Welcome from './app/screens/welcome';
import { View,Text ,TextInput} from 'react-native';
import {MaterialCommunityIcons} from  '@expo/vector-icons'
import Card from './app/components/Card';
import ListItem from './app/components/ListItem';

import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import MessagesScreen from './app/screens/MessagesScreen';
import UserAccount from './app/components/UserAccount';
import AppTextInput from './app/components/AppTextInput';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
export default function App() {

    const [todo,setTodo] = useState('');
   return (
    // <UserAccount></UserAccount>
    // <Screen>
    // <AppTextInput icon="form" placeholder="Write Todo"></AppTextInput>
    // <MessagesScreen></MessagesScreen>
    // </Screen>
    <>
    <LoginScreen></LoginScreen>
    {/* <RegisterScreen></RegisterScreen> */}
    </>
    );
}

