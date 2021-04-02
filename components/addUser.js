import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import firestore from '@react-native-firebase/firestore';

const AddUser = ({navigation}) => {
    const [nome, setNome] = useState("");
    const [curso, setCurso] = useState("");
    const [idade, setIdade] = useState("");

    const handleAddUser = async () => {
        await firestore()
            .collection('users')
            .add({
                curso,
                idade,
                nome
            })
            .then(() => {
                console.log('User added!');
            });

        navigation.push("UserList");
    }

    return (
        <View style={styles.container}>
            <View style={styles.formIMC}>
                <TextInput placeholder="Digite seu nome" style={styles.textInput} onChangeText={nome => setNome(nome)}/>
                <TextInput placeholder="Digite seu curso" style={styles.textInput} onChangeText={curso => setCurso(curso)}/>
                <TextInput placeholder="Digite sua idade" style={styles.textInput} onChangeText={idade => setIdade(idade)} keyboardType="numeric" />

                <TouchableOpacity onPress={() => handleAddUser()} style={[styles.button, { backgroundColor: "#55c2ff" }]}>
                    <Text style={styles.textButtonAdd}>Adicionar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.push("UserList")} style={[styles.button, { backgroundColor: "#d3d3d3" }]}>
                    <Text style={styles.textButtonAdd}>Voltar</Text>
                </TouchableOpacity>
            </View>
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
    button: {
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 24,
        margin: 5,
        width: "80%"
    },
    textButtonAdd: {
        color: "#fff",
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})

export default AddUser;