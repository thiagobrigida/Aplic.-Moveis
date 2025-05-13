import React from 'react';
import {View, Text} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './Styles'
import { Menu } from '../../components/Menu/Menu'

export default function Home() {
    return (
      <View style={styles.container}>
        <Home/>
        <Text>Olá Mundo!</Text>
        <Menu />
        <StatusBar style="auto" />
      </View>
    );
  }
