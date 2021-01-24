import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Perfil = ({navigation, route}) => {

  const user = route.params.user;

  const fotoPerfil = {
    uri: "https://avatars.githubusercontent.com/u/33751384?s=460&u=bba99304003d18646b6e4ed1152f02a23f00d081&v=4"
  }

  return (
      <View style={styles.container}>
        <Text style={styles.header}>Perfil</Text>
        <View style={{alignItems: "center"}}>
          <Image style={styles.profilePic} source={fotoPerfil}/>
          <Text style={styles.userInfo}>{`Nome: ${user.nome}`}</Text>
          <Text style={styles.userInfo}>{`Idade: ${user.idade}`}</Text>
          <Text style={styles.userInfo}>{`Email: ${user.email}`}</Text>
        </View>  
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
  userInfo: {
      fontSize: 16,
      marginVertical: 25
  },
  profilePic: {
    width: 200,
    height: 200,
    backgroundColor: "red"
  }
})

export default Perfil;