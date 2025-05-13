import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './MenuStyle';

export function Menu() {
  return (
    <View style={styles.container}>
        <Text>Menu 1</Text>
        <Text>Menu 2</Text>
    </View>
  );
}