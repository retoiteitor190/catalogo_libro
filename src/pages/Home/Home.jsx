import React,{useState} from 'react';
import { Text, View } from 'react-native';
import { styles } from './Home.styles';

import ButtonComponent from '../../components/Button/Button.component';

export default function HomeScreen({onPress}){

    return(
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <ButtonComponent  onPress={onPress} color="#805288"/>
      </View>
    )
  }
  