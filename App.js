import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import Ionicons from "react-native-vector-icons/Ionicons"

import LoginScreen from "./src/pages/login"
import SettingsScreen from './src/pages/Settings/Settings';
import HomeScreen from './src/pages/Home/Home';





  const tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator()

export default function App() {
  const [user,setUser]=useState(null);
  return (
    <NavigationContainer>
      {!user ? (
        <Stack.Navigator>
          <Stack.Screen
          options={{ headerShown: false }}
          children={(props)=>(
            <LoginScreen {...props} onPress={()=>setUser(true)} />
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
           <HomeScreen {...props} onPress={()=>setUser(null)}></HomeScreen>
         )} 
         />
        <tab.Screen name="Settings" component={SettingsScreen}/>
      </tab.Navigator>
      
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#00a884",
    width:150,
    height:40,
    borderRadius:10,
    padding:5,
    marginTop:10,
  },
  text:{
    color:"#fff",
  },
});

