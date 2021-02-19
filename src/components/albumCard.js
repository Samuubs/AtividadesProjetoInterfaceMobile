import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';

const AlbumCard = ({album, showModal}) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: "row", borderWidth: 1, padding: 14, borderColor: "#ddd"}}>
                <Image style={{width: 50, height: 50}} source={{uri: `https://raw.githubusercontent.com/san650/ten/master/apps/music${album.image}`}} />
                <View style={{marginLeft: 10}}>
                    <Text>{album.artist}</Text>
                    <Text>{album.name}</Text>
                </View>
            </View>

            <View style={{justifyContent: "center", alignItems: "center", marginTop: "20%"}}>
                <Image style={{width: 300, height: 300, alignSelf: "center"}} source={{uri: `https://raw.githubusercontent.com/san650/ten/master/apps/music${album.image}`}} />
            </View>

            <View style={{ alignSelf: "center", position: "absolute", bottom: 0, paddingVertical: 24, width: "80%"}}>
                <TouchableOpacity onPress={() => showModal(album)} style={{backgroundColor: "#c4c4c4", padding: 14, justifyContent: "center", alignItems: "center", marginBottom: 5}}>
                    <Text style={{fontWeight: "bold", color: "#000"}}>Ver Músicas</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor: "#c4c4c4", padding: 14, justifyContent: "center", alignItems: "center"}}>
                    <Text style={{fontWeight: "bold", color: "#000"}}>Me Compre!</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
    }
})

export default AlbumCard;