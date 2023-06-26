import React from 'react';
import {StyleSheet, Text, View} from "react-native";

export const FlexScreen = () => {
    return (
        <View style={ styles.container }>
            <Text style={ styles.caja1 }>caja 1</Text>
            <Text style={ styles.caja2 }>caja 2</Text>
            <Text style={ styles.caja3 }>caja 3</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1, // sus hijos ocmparten el espacio disponible
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
    },
    caja1:{
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        //alignSelf: 'center',
    },
    caja2:{

        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        //alignSelf: 'flex-start',
    },
    caja3:{
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        //alignSelf: 'flex-end',
    },
});

