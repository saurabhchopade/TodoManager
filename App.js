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



// export default function App() {

//     const [todo,setTodo] = useState('');
//    return (
//     // <UserAccount></UserAccount>
//     // <Screen>
//     // <AppTextInput icon="form" placeholder="Write Todo"></AppTextInput>
//     // <MessagesScreen></MessagesScreen>
//     // </Screen>
//     <>
//     {/* <LoginScreen></LoginScreen> */}
//     <RegisterScreen></RegisterScreen>


//     </>
//     );
// }


 function HomeScreen2({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen2</Text>
        <Button title="home2" onPress={()=>navigation.navigate('HomeScreen1')}></Button>

      </View>
    );
  }
  

 function HomeScreen1({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen1</Text>
        <Button title="Home1" onPress={()=>navigation.navigate('HomeScreen2')}></Button>
      </View>
      
    );
  }
  
  const Stack = createNativeStackNavigator();
  
  const StackNav = ()=>{
      return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
     </Stack.Navigator>
          );
  }
  


  const Tab = createBottomTabNavigator();

  const TabNav =()=>{
      return(
          <Tab.Navigator screenOptions={{headerShown:false}} >
              <Tab.Screen name="Todos"  options={{ headerShown: false }} component={MessagesScreen} options={{tabBarIcon:()=><MaterialCommunityIcons name="home" color={colors.secondary} size={30}/>,tabBarBadge:2}}></Tab.Screen>
              <Tab.Screen name="Account" component={UserAccount} options={{tabBarIcon:()=><MaterialCommunityIcons name="account" size={30}/>}}></Tab.Screen>
          </Tab.Navigator>
      )
  }

  export default function App() {
    const [hasAccount,setHasAccount] = useState(false);

      return (
          <>
          <NavigationContainer> 
              <TabNav></TabNav>
              {/* <StackNav></StackNav> */}
            </NavigationContainer>
            </>
    );
  }
  


