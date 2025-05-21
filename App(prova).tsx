//Atividade Avaliativa 1 bimestre
//Thiago Lucas Soares Brigida
//21-05-2025

//Importação das funções e variáveis que estão sendo usadas no código
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, StyleSheet, Image, Text, TextInput, View, Button } from 'react-native';

//No export são criadas algumas variáveis que serão úteis durante a execução do código
export default function App() {
  const [valorTomado, setValorTomado] = useState('');
  const [valorPago, setValorPago] = useState('');
  const [calculo, setCalculo] = useState(0);

  const logo = require('./assets/logo.png');
  const valorTomadoNumber = parseFloat(valorTomado);
  const valorPagoNumber = parseFloat(valorPago);

//Função que faz o cálculo da taxa de juros
  function calcular(valorTomado: number, valorPago: number) {
    setCalculo(((valorPago - valorTomado) / valorTomado) * 100)
    return;
  }


  //Início do título e da logo do programa
  //Caixas de texto para o usuário colocar os valores
  //Botão que realiza a função de calcular o juros
  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width: 300, height: 200 }}></Image>
      <Text>Cálculo de Taxa de Juros sobre Empréstimos</Text>
      <TextInput onChangeText={setValorTomado}
        placeholder='Valor Tomado' value={valorTomado}
        keyboardType='numeric'
        style={styles.inputer}
      />
      <TextInput onChangeText={setValorPago}
        placeholder='Valor Pago' value={valorPago}
        keyboardType='numeric'
        style={styles.inputer}
      />
      <Button onPress={() => calcular(parseFloat(valorTomado), parseFloat(valorPago))} title='Calcula' />
      <Text>Taxa de Juros: {calculo}%</Text>
    </View>
  );
}


//Estilização do programa
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputer:{
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: 'black',
    width: '80%',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    marginTop: 10,
  }
});