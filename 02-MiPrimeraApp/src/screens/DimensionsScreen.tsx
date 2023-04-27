import React from 'react';
import {StyleSheet, Text, View, Dimensions, useWindowDimensions} from "react-native";

//const {width,height} = Dimensions.get('window');

export const DimensionsScreen = () => {

    const  {width, height } =  useWindowDimensions();

    return (
        <View style={styles.container}>
            <View style={{
                ...styles.cajaMorada,
                width: width * 0.6,
            }}/>
            <View style={styles.cajaNaranja}/>
            <Text style={styles.title} >W: {width}, H: {height}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 200,
        backgroundColor: 'red',
    },
    cajaMorada:{
        //width:'50%',
        height:'50%',
        backgroundColor: '#5856D6',
    },
    cajaNaranja:{
        width:'50%',
        height:'50%',
        backgroundColor: '#F0A23B',
    },
    title:{
        fontSize: 20,
        textAlign: 'center',
    }
});

