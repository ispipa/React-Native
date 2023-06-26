import React from 'react';
import {StyleSheet, View} from "react-native";

export const TaskScreen10 = () => {
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
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
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
        top: 50,
    },
    cajaAzul:{
        width: 100,
        height: 100,
        backgroundColor: '#28C4D9',
        borderWidth: 10,
        borderColor: 'white',
    }
});
