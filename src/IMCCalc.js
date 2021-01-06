import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import IMCMsg from './IMCMsg';

const IMCCalc = ({altura, peso, calcular}) => {
    const imc = peso / (altura ** 2)

    if (calcular) {
        return (
            <View style={styles.container}>
                <Text>Seu IMC é: {imc}</Text>
                <IMCMsg imc={imc}/>
            </View>
        );
    }else {
        return null;
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default IMCCalc;