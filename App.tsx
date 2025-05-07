import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageSourcePropType } from 'react-native';
import React, { useState } from 'react';

const faces: ImageSourcePropType[] =
  [require("./assets/lado1.png"),
  require("./assets/lado2.png"),
  require("./assets/lado3.png"),
  require("./assets/lado4.png"),
  require("./assets/lado5.png"),
  require("./assets/lado6.png")];


export default function App() {
  const [num, setNum] = useState(0);
  const [ultimo, setUltimo] = useState(-1);

  function Sortear() {
    let novoNum:number;

    do {
      novoNum = Math.floor(Math.random() * 6);
    } while (novoNum == ultimo);

    setNum(novoNum);
    setUltimo(novoNum);
    return novoNum;
  }

  return (
    <View style={(num + 1) <= 3 ? styles.corLeve : styles.corForte }>
      <Text>Teste sua sorte!</Text>
      <TouchableOpacity onPress={Sortear}>
        <Image source={faces[num]}></Image>
      </TouchableOpacity>
      <Text>Número sorteado: {num + 1}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  corForte: {
    flex: 1,
    color: '#fff',
    backgroundColor: 'rgb(0, 238, 255)',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  corLeve: {
    flex: 1,
    color: '#fff',
    backgroundColor: 'rgb(203, 243, 255)',
    alignItems: 'center',
    justifyContent: 'space-around',
  }
});
