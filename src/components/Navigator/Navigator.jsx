import React,{useContext} from 'react';


import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import Ionicons from "react-native-vector-icons/Ionicons"

import LoginScreen from "../../pages/login"
import SettingsScreen from '../../pages/Settings';
import HomeScreen from '../../pages/Home';

import { GlobalContext } from '../../context/global/global.context';

const tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();



export default function MainNavigator(){
    const {state,login,logout} = useContext(GlobalContext);

    console.log({state});
  return (
    <NavigationContainer>
      {!state.user ? (
        <Stack.Navigator>
          <Stack.Screen
          options={{ headerShown: false }}
          children={(props)=>(
            <LoginScreen {...props} onPress={()=> login()} />
          )}
          name="Login"
          />
        </Stack.Navigator>
      ):(
        <tab.Navigator
      screenOptions={({route})=>({
        tabBarIcon:({focused, color, size})=>{
          let iconName;
          if(route.name == "Home"){
            iconName = focused
            ?"ios-information-circle"
            :"ios-information-circle-outline";
          }else if (route.name=="Settings"){
            iconName = "ios-list";
          } 
          return <Ionicons name={iconName} size={size} color={color}/>
        },
        tabBarActiveTintColor:"red",
        tabBarInactiveTintColor:"gray",
      })}
      >
        <tab.Screen
         name="Home"
         children={(props)=>(
           <HomeScreen {...props} onPress={()=>logout()}></HomeScreen>
         )} 
         />
        <tab.Screen name="Settings" component={SettingsScreen}/>
      </tab.Navigator>
      
      )}
    </NavigationContainer>
  );
}