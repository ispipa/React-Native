import React from 'react';
import {StyleSheet, View} from "react-native";

export const TaskScreen1 = () => {
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
    },
    cajaMorada:{
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
    },
    cajaNaranja:{
        flex: 1,
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
    },
    cajaAzul:{
        width: 100,
        height: 100,
        backgroundColor: '#28C4D9',
        borderWidth: 10,
        borderColor: 'white',
    }
});
