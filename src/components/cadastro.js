import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';


const Cadastro = ({ navigation }) => {
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [email, setEmail] = useState("");

    const handleCasdastro = () => {
        const user = {
            nome,
            idade,
            email
        }
        navigation.push('MyModal', {user});
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Cadastro</Text>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false} 
                placeholder="Digite seu nome"
                placeholderTextColor="#999"
                style={styles.input}
                value={nome}
                onChangeText={text => setNome(text)}
            />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false} 
                placeholder="Digite sua idade"
                placeholderTextColor="#999"
                style={styles.input}
                value={idade}
                keyboardType = 'numeric'
                onChangeText={text => setIdade(text)}
            />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false} 
                placeholder="Digite seu email"
                placeholderTextColor="#999"
                style={styles.input}
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <TouchableOpacity style={styles.button} onPress={handleCasdastro}>
                <Text style={styles.buttonText}>OK</Text>
            </TouchableOpacity>
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
        fontSize: 28,
    },
    input: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 4,
        marginTop: 20,
        paddingHorizontal: 15
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
    buttonText: {
      color: "#fff",
      fontWeight: 'bold',
      fontSize: 16  
    }
})

export default Cadastro;