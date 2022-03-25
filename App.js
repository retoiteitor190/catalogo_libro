import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer, TabActions} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 

function HomeScreen(){

  return(
    <view style={styles.container}>
      <text>Home Screem</text>
    </view>
  )
}

function SettingsScreen(){
  return(
    <view style={styles.container}>
      <text>setting screen </text>
    </view>
  )
  }

  const tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <tab.Navigator>
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
