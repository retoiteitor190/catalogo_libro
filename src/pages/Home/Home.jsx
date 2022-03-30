import React,{useState} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './Home.styles';

export default function HomeScreen({onPress}){

    return(
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.text}>logOut</Text>
        </TouchableOpacity>
      </View>
    )
  }
  