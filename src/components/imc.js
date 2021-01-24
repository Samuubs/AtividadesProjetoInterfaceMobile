import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const IMC = ({navigation}) => {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);

    const calcularIMC = () => {
      const imc = peso / (altura ** 2);
      navigation.push('Resultado', {imc});
    }

    return (
        <View style={styles.container}>
            <View style={styles.formIMC}>
                <Text style={styles.header}>IMC</Text>
                <TextInput placeholder="Digite seu peso em quilos (Ex: 75)" style={styles.textInput} onChangeText={peso => setPeso(parseInt(peso))}/>
                <TextInput placeholder="Digite sua altura (Ex: 1.80)" style={styles.textInput} onChangeText={altura => setAltura(parseFloat(altura))}/>
                <TouchableOpacity onPress={() => calcularIMC()} style={styles.buttonCalcular}><Text style={styles.textButtonCalcular}>Cacular</Text></TouchableOpacity>
            </View>
        </View>   
    );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      justifyContent: 'center',
      alignItems: "center",
      padding: 30
  },
  header: {
      alignSelf: "center",
      textTransform: 'uppercase',
      fontSize: 20,
      fontWeight: 'bold'
  },
  formIMC: {
      marginBottom: 40,
      width: "100%",
      alignItems: 'center',
      justifyContent: 'center',
  },
  textInput: {
      height: 46,
      alignSelf: 'stretch',
      backgroundColor: "#fff",
      borderWidth: 1,
      borderColor: "#ddd",
      borderRadius: 4,
      marginTop: 20,
      paddingHorizontal: 15
  },
  buttonCalcular: {
      height: 46,
      alignSelf: 'stretch',
      backgroundColor: '#df4723',
      borderRadius: 4,
      marginTop: 10,
      justifyContent: 'center',
      alignItems: 'center'
  },
  textButtonCalcular: {
      color: "#fff",
      fontWeight: 'bold',
      fontSize: 16 
  }
});

export default IMC;