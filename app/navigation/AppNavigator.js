import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MessagesScreen from '../screens/MessagesScreen';
import UserAccount from '../components/UserAccount';
import {MaterialCommunityIcons} from  '@expo/vector-icons'
import colors from '../config/colors';

  const Tab = createBottomTabNavigator();

  const AppNavigator =()=>{
      return(
          <Tab.Navigator screenOptions={{headerShown:false}} >
              <Tab.Screen name="MessagesScreen"  options={{ headerShown: false }} component={MessagesScreen} options={{tabBarIcon:()=><MaterialCommunityIcons name="home" color={colors.secondary} size={30}/>,tabBarBadge:2}}></Tab.Screen>
              <Tab.Screen name="Account" component={UserAccount} options={{tabBarIcon:()=><MaterialCommunityIcons name="account" size={30}/>}}></Tab.Screen>
          </Tab.Navigator>
      )
  }

  export default AppNavigator;