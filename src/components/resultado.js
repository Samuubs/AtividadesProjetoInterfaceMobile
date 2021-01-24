import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Resultado = ({navigation, route}) => {
    const imc = route.params.imc;

    let msg = '';
    let cor = "red";

    if (imc < 17) msg = 'Muito abaixo do peso'
        else if (imc > 17 && imc < 18.49) msg = 'Abaixo do peso'
        else if (imc > 18.5 && imc < 24.99) { msg = 'Peso normal', cor = 'blue' }
        else if (imc > 25 && imc < 29.99) msg = 'Acima do peso'
        else if (imc > 30 && imc < 34.99) msg = 'Obesidade I'
        else if (imc > 35 && imc < 39.99) msg = 'Obesidade II (severa)'
        else msg = 'Obesidade III (mórbida)'

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Resultado</Text>
            <View style={styles.content}>
              <Text style={styles.header}>Seu IMC é: {imc}</Text>
              <Text style={{fontSize: 24, textAlign: "center", margin: 10, fontWeight: "bold", color: cor}}>
                  {msg}
              </Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
              <Text style={styles.textButton}>Home</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#eee",
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 30,
      paddingVertical: 120
  },
  button: {
      height: 46,
      alignSelf: 'stretch',
      backgroundColor: '#df4723',
      borderRadius: 4,
      marginTop: 10,
      justifyContent: 'center',
      alignItems: 'center'
  },
  header: {
      fontSize: 28,
      textAlign: "center"
  },
  textButton: {
      color: "#fff",
      fontWeight: 'bold',
      fontSize: 16 
  },
  content: {
      justifyContent: 'center',
      alignItems: "center",
  },
})

export default Resultado;