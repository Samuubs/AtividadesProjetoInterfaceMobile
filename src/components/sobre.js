import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const Sobre = ({navigation}) => {
  return (
      <View style={styles.container}>
        <Text style={styles.header}>Sobre</Text>
        <Text style={styles.about}>
          Meu nome é Samuel Barbosa Santiago, sou aluno do curso de Engenharia de Software na Universidade Federal do Ceará. 
          Este é um aplicativo criado para a quarta atividade da disciplina de Projeto de Interfaces para Dispositivos Móveis.
        </Text>
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
  },
  textButton: {
      color: "#fff",
      fontWeight: 'bold',
      fontSize: 16 
  },
  about: {
      textAlign: 'center',
      fontSize: 14
  }
})

export default Sobre;