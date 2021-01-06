import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import IMCCalc from './IMCCalc';

const IMCApp = () => {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [calcular, setCalcular] = useState(false);

    const calcularIMC = () => {
        setCalcular(true)
    }

    return (
        <View style={styles.container}>
            <View style={styles.formIMC}>
                <Text style={styles.header}>Calcule seu IMC!</Text>
                <TextInput placeholder="Digite seu peso em quilos (Ex: 75)" style={styles.textInput} onChangeText={peso => setPeso(parseInt(peso))}/>
                <TextInput placeholder="Digite sua altura (Ex: 1.80)" style={styles.textInput} onChangeText={altura => setAltura(parseFloat(altura))}/>
                <TouchableOpacity onPress={() => calcularIMC()} style={styles.buttonCalcular}><Text style={styles.textButtonCalcular}>Cacular</Text></TouchableOpacity>
            </View>
            <IMCCalc altura={altura} peso={peso} calcular={calcular}/>
        </View>   
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
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
        backgroundColor: "#eee",
        paddingHorizontal: 24,
        paddingVertical: 14,
        borderColor: "#ddd",
        borderWidth: 1,
        marginBottom: 5,
        width: "80%"
    },
    buttonCalcular: {
        backgroundColor: "#55c2ff",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 24,
        width: "80%"
    },
    textButtonCalcular: {
        color: "#fff",
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})

export default IMCApp;