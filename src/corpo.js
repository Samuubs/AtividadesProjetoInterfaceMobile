import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Corpo = () => {
    let profilePic = {
        uri: "https://avatars1.githubusercontent.com/u/33751384?s=460&u=bba99304003d18646b6e4ed1152f02a23f00d081&v=4"
    }

    return (
        <View style={ styles.container }>
            <Image source={profilePic} style={ { height: 200, width: 200 } } />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: "25%",
        marginBottom: "15%"
    },
});

export default Corpo;