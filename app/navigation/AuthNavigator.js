import React,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../screens/welcome';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SignUpIndicator from '../components/SignUpIndicator';

import AppNavigator from './AppNavigator';
import store from '../service/store';

const Stack = createNativeStackNavigator();
const AuthNavigator = ()=>{
  const [hasAccount,setHasAccount] = useState('');
    console.log(hasAccount);
    store.subscribe(()=>setHasAccount( store.getState().state1));
    
    const has = ((hasAccount=='true')?"AppNavigator":"Login");

    return(
  <Stack.Navigator 
  initialRouteName={((store.getState().state1)=='true')?"AppNavigator":"Login"}
  screenOptions={{headerShown:false}} >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={LoginScreen}  />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="AppNavigator" component={AppNavigator} />
   </Stack.Navigator>
        );
}


export default AuthNavigator; 
