import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageSourcePropType } from 'react-native';
import React, {useState} from 'react';

const faces: ImageSourcePropType[] = 
  [require("./assets/lado1.png"),
  require("./assets/lado2.png"),
  require("./assets/lado3.png"),
  require("./assets/lado4.png"),
  require("./assets/lado5.png"),
  require("./assets/lado6.png")];


export default function App() {
  const [num, setNum] = useState(0);
  let ultimo:number = -1;
  function Sortear(){
    if(ultimo == -1 || ultimo == num){
      setNum(Math.floor(Math.random() * 6));
      ultimo = num;
    }else{
      Sortear();
    }
    return num;
  }

  return (
    <View style={styles.container}>
      <Text>Teste sua sorte!</Text>
      <TouchableOpacity onPress={Sortear}>
        <Image source={faces[num]}></Image>
      </TouchableOpacity>
      
      <StatusBar style="auto" />
    </View>
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
