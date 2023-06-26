import React from 'react';
import {StyleSheet, View} from "react-native";

export const PositionRelativeScreen = () => {

    //por defecto todo tiene position: relative

    return (
        <View style={styles.container}>
            <View style={styles.cajaMorada}/>
            <View style={styles.cajaNaranja}/>
            <View style={styles.cajaAzul}/>
            <View style={styles.cajaAzul2}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
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
        width: 100,
        height: 120,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
        top:-50,
    },
    cajaAzul:{
        width: 80,
        height: 80,
        borderBottomRightRadius: 100,
        borderTopRightRadius: 100,
        borderBottomLeftRadius: 100,
        backgroundColor: 'blue',
        borderWidth: 10,
        borderColor: 'white',
        top:-135,
        left: 45,
    },
    cajaAzul2:{
        width: 80,
        height: 80,
        borderBottomLeftRadius: 100,
        borderTopLeftRadius: 100,
        borderBottomRightRadius: 100,
        backgroundColor: 'blue',
        borderWidth: 10,
        borderColor: 'white',
        top:-215,
        right: 45,
    }
});
