import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [gasolina, setGasolina] = useState('');
  const [alcool, setAlcool] = useState('');
  const [exibe, setExibe] = useState('');

  function calculo_valor(){
  
    if((Number(alcool) / Number(gasolina) <  0.7)){
      setExibe("Nesse caso, o álcool é mais vantajoso!")
    }else{
      setExibe("Nesse caso, a gasolina é mais vantajosa!")
    }
  }
  return (

    <View style={styles.container}>
      <Image source={require('./assets/logo.jpgr')}></Image> 
      <TextInput  style={styles.input} value={gasolina} 
        onChangeText={setGasolina} keyboardType='decimal-pad'
        placeholder='Preço gasolina'/>
        
      <TextInput style={styles.input} value={alcool} 
        onChangeText={setAlcool} keyboardType='decimal-pad'
        placeholder='Preço álcool'/>
      
      <Button title="calcular"
      onPress={calculo_valor}
      ></Button>

      <Text>{exibe}</Text>
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
  input: {
    backgroundColor: 'rgb(190, 190, 190)'
  }
});
