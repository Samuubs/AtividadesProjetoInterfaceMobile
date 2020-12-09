import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Votacao from "./src/votacao";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={{alignSelf: "center", marginTop: "15%", fontSize: 24, fontWeight: "bold", position: "absolute", top: 0}}>Votação de Cidades</Text>
      <Votacao/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
});
