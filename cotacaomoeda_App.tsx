import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, StyleSheet, Image, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [dolar, setDolar] = useState("");
  const [taxa, setTaxa] = useState("");

  const logo = require('./assets/moeda.jpg');
  const dolarNumber = parseFloat(dolar);
  const taxaNumber = parseFloat(taxa);

  return (
    <View style={styles.container}>
      <Image source={logo} style={{width: 30, height: 30}}></Image>
      <Text>Conversor de Moedas</Text>
      <TextInput onChangeText={(valor) => {
        setDolar(valor);
      }}> </TextInput>
      <TextInput onChangeText={(valor) => {
        setTaxa(valor);
      }}> </TextInput>
      <Button onPress={() => converter(dolar, taxa) } title='Converte' />
      converter(dolar, taxa);
    </View>
  );
}

function converter(dolar: any, taxa: any) {
  return (<View>
      <Text>Valor Convertido: {dolar * taxa}</Text>
  </View>


  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
