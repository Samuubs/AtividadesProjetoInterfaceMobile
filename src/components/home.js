import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';


const Home = ({ navigation }) => {
  return (
      <View style={styles.container}>
        <Text style={styles.header}>Atividade 04</Text>
        <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('Cadastro') }>
            <Text style={styles.textButton}>Cadastro</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('IMC') }>
            <Text style={styles.textButton}>IMC</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('Sobre') }>
            <Text style={styles.textButton}>Sobre</Text>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eee",
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30
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
    },
    textButton: {
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 16 
    }
})

export default Home;