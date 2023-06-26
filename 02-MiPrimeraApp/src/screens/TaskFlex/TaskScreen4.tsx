import React from 'react';
import {StyleSheet, View} from "react-native";

export const TaskScreen4 = () => {
    return (
        <View style={ styles.container }>
            <View style={ styles.cajaMorada }/>
            <View style={ styles.cajaNaranja }/>
            <View style={ styles.cajaAzul }/>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#28C4D9',
        alignItems: 'flex-end',
        justifyContent: 'space-between',

    },
    cajaMorada:{
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
    },
    cajaNaranja:{
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
        alignSelf: 'center',
    },
    cajaAzul:{
        width: 100,
        height: 100,
        backgroundColor: '#28C4D9',
        borderWidth: 10,
        borderColor: 'white',
        alignSelf: 'flex-start',
    },
});
