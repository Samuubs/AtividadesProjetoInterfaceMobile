import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Cabecalho = ({ nome, curso }) => {
    return (
        <View style={styles.container}>
            <Text>{`Nome: ${nome}`}</Text>
            <Text>{`Curso: ${curso}`}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: "#ddd"
    },
});

export default Cabecalho;