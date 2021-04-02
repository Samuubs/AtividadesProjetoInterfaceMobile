import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import firestore from '@react-native-firebase/firestore';

const EditUser = ({navigation, route}) => {
    const [nome, setNome] = useState(route.params.user._data.nome);
    const [curso, setCurso] = useState(route.params.user._data.curso);
    const [idade, setIdade] = useState(route.params.user._data.idade);

    const handleEditUser = async () => {
        await firestore()
            .collection('users')
            .doc(route.params.user.id)
            .update({
                curso,
                idade,
                nome
            })
            .then(() => {
                console.log('User updated!');
            });

        navigation.push("UserList");
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <TextInput placeholder="Digite seu nome" value={nome} style={styles.textInput} onChangeText={nome => setNome(nome)}/>
                <TextInput placeholder="Digite seu curso" value={curso} style={styles.textInput} onChangeText={curso => setCurso(curso)}/>
                <TextInput placeholder="Digite sua idade" value={idade} style={styles.textInput} onChangeText={idade => setIdade(idade)} keyboardType="numeric" />

                <TouchableOpacity onPress={() => handleEditUser()} style={[styles.button, { backgroundColor: "#55c2ff" }]}>
                    <Text style={styles.textButtonAdd}>Editar</Text>
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
    form: {
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

export default EditUser;
