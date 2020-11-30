import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Disciplina = ( { nome } ) => {
    return (
        <View style={ styles.container }>
            <Text style={ { paddingBottom: 5, fontSize: 16 } }>{ nome }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    }
});

export default Disciplina;