import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import firestore from '@react-native-firebase/firestore';

const DeleteUser = ({navigation, route}) => {
    const handleDeleteUser = async () => {
        await firestore()
            .collection('users')
            .doc(route.params.user.id)
            .delete()
            .then(() => {
                console.log('User deleted!');
            });

        navigation.push("UserList");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textDelete}>{`Confirmar a exclusão do usuário ${route.params.user._data.nome}?`}</Text>
            
            <View style={styles.containerButtons}>
                <TouchableOpacity onPress={() => handleDeleteUser()} style={[styles.button, { backgroundColor: "#eb0000" }]}>
                    <Text style={styles.buttonText}>Confimar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.push("UserList")} style={[styles.button, { backgroundColor: "#d3d3d3" }]}>
                    <Text style={styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "75%",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center"
    },
    containerButtons: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    textDelete: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 15
    },
    button: {
        justifyContent: "center", 
        alignItems: "center",
        height: 50,
        width: 120,
        margin: 5,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold"
    },
});

export default DeleteUser;