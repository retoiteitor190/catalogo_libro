import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer, TabActions} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 

import Ionicons from "react-native-vector-icons/Ionicons"
function HomeScreen(){

  return(
    <View style={styles.container}>
      <Text>Home Screem</Text>
    </View>
  )
}

function SettingsScreen(){
  return(
    <View style={styles.container}>
      <Text>setting screen </Text>
    </View>
  )
  }

  const tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
        <tab.Screen name="Home" component={HomeScreen}/>
        <tab.Screen name="Settings" component={SettingsScreen}/>
      </tab.Navigator>
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
});
