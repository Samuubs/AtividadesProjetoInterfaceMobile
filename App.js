import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import Cabecalho from "./src/cabecalho";
import Corpo from "./src/corpo";
import Disciplina from "./src/disciplina";

export default function App() {
  return (
    <View style={ styles.container }>
      <StatusBar hidden={ true }/>
      <Cabecalho nome="Samuel Barbosa Santiago" curso="Engenharia de Software"/>
      <View style={ styles.content }>
        <Corpo />
        <View>
          <Text style={ { alignSelf: "center", fontSize: 24, fontWeight: "bold", marginBottom: 5 } }>Disciplinas</Text>
          <Disciplina nome="Gerência de Configuração" />
          <Disciplina nome="Manutenção de Software" />
          <Disciplina nome="Marketing" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    justifyContent: "center", 
    alignItems: "center", 
  }
});
