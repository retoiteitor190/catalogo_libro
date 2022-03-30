import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from "./login.styles";

import ButtonComponent from '../../components/Button/Button.component';

export default function Login({onPress}){
    return(
        <View style={styles.container}>
          <StatusBar/>
          <Text>Login Screen</Text>
          <ButtonComponent title="login" onPress={onPress} color="#805288"/>
        </View>
      );
}