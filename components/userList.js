import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

import firestore from '@react-native-firebase/firestore';

const UserList = ({navigation}) => {
    const [users, setUsers] = useState([]);

    function onResult(QuerySnapshot) {
        setUsers(QuerySnapshot._docs);
    }
      
    function onError(error) {
        console.error(error);
    }

    useEffect(() => {
        firestore()
        .collection('users')
        .onSnapshot(onResult, onError);
    }, []);
  
    const renderUserInfo = (users) => {
        if (users) {
            return users.map(user => {
                return (
                    <View key={user.id} style={styles.userView}>
                        <Text style={styles.userData}>{`${user._data.nome}, do curso ${user._data.curso} aos ${user._data.idade} anos.`}</Text>

                        <View style={styles.buttonsContainer}>
                            <TouchableOpacity onPress={() => navigation.push("EditUser", {user: user})} style={[styles.button, { backgroundColor: "#00eb3f" }]}>
                                <Text style={styles.buttonText}>Editar Usuário</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => navigation.push("DeleteUser", {user: user})} style={[styles.button, {backgroundColor: "#eb0000"}]}>
                                <Text style={styles.buttonText}>Deletar Usuário</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            })
        }
        return (
            <View style={styles.loadingView}>
                <ActivityIndicator size="large" color="#000" />
            </View>
        );
    }
  
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.push("AddUser")} style={[styles.button, { backgroundColor: "#0800eb", margin: 5, width: "95%" }]}>
                <Text style={styles.buttonText}>Adicionar Usuário</Text>
            </TouchableOpacity>

            <View style={{flex: 1}}>
                <ScrollView> 
                    <View style={{ alignItems: "center"}}>
                        { renderUserInfo(users) }                
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ddd", 
        alignItems: "center"
    },
    buttonsContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
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
    loadingView: {
        flex: 1, 
        backgroundColor: "#ddd", 
        justifyContent: "center", 
        alignItems: "center"
    },
    userView: {
        borderWidth: 1, 
        borderColor: "#000", 
        paddingVertical: 10, 
        paddingHorizontal: 24, 
        width: "95%", 
        marginBottom: 5,
        height: 125,
        justifyContent: "space-between"
    },
    userData: {
        fontSize: 18, 
        fontWeight: "bold", 
        textAlign: "center"
    }
});

export default UserList;