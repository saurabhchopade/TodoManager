import React,{useState} from 'react';

import Welcome from './app/screens/welcome';
import { View,Text ,TextInput,Button} from 'react-native';
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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from './app/config/colors';
import AuthNavigator from './app/navigation/AuthNavigator';
import AppNavigator from './app/navigation/AppNavigator';
import Auth from './app/service/Auth';

  export default function App() {
    const [hasAccount,setHasAccount] = useState(true);

      return (
            hasAccount?(
            <>
              <NavigationContainer> 
                <AppNavigator></AppNavigator>
              </NavigationContainer>
            </>) :(
            <>
             <NavigationContainer> 
              <AuthNavigator></AuthNavigator>
             </NavigationContainer>
            </>)

    );
  }
  


