import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';

import axios from 'axios';

const AlbumModal = ({route, navigation}) => {
    const [music, setMusics] = useState("");

    useEffect(() => {
        async function getAlbumMusics() {
            const result = await axios.get(`https://raw.githubusercontent.com/san650/ten/master/apps/music${route.params.musics}`)
            setMusics(result.data);
        }
        getAlbumMusics();
    }, []);

    return (
        <View style={styles.container}>
            <View style={{flexDirection: "row", borderWidth: 1, padding: 14, borderColor: "#ddd", justifyContent: "center", alignItems: "center"}}>
                <View style={{marginLeft: 10}}>
                    <Text style={{fontWeight: "bold", textAlign: "center"}}>{`.::${route.params.artist}::.`}</Text>
                    <Text style={{textAlign: "center"}}>Lista de Músicas</Text>
                </View>
            </View>

            <View style={{alignSelf: "center", marginTop: "20%"}}>
                {music.tracks && music.tracks.map((music, index) => {
                    const formatedIndex = index < 10 ? `0${index}` : index;
                    return (
                        <Text key={music.id}>
                            {`${formatedIndex} - (${music.duration}) - ${music.title}`}
                        </Text>
                    )
                })}
            </View>

            <View style={{ alignSelf: "center", position: "absolute", bottom: 0, paddingVertical: 24, width: "80%"}}>
                <TouchableOpacity onPress={() => navigation.push('Main')} style={{backgroundColor: "#c4c4c4", padding: 14, justifyContent: "center", alignItems: "center", marginBottom: 5}}>
                    <Text style={{fontWeight: "bold", color: "#000"}}>Voltar</Text>
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

export default AlbumModal;