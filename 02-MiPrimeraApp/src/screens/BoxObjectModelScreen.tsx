import React from 'react';
import {StyleSheet, Text, View} from "react-native";

export const BoxObjectModelScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>BoxObjectModelScreen</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'red',
    },
    title:{
        fontSize: 20,
        //width:250,
        borderWidth: 10,
        //padding:50,
        //paddingHorizontal: 100,
        //paddingVertical: 20,
        //paddingEnd:100,
        //paddingStart:100
        //marginHorizontal:20,
        //marginVertical:20,
        //marginLeft:10,
        //marginRight:10,
        //marginTop:20,
        //marginStart:100
        //marginEnd:100,
        //backgroundColor: 'green',
    },
});
