import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from "./login.styles";

export default function Login({onPress}){
    return(
        <View style={styles.container}>
          <StatusBar/>
          <Text>Login Screen</Text>
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
        </View>
      );
}