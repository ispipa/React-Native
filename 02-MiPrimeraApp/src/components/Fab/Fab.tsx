import React from 'react';
import {StyleSheet, Text, TouchableNativeFeedback, View, Platform, TouchableOpacity} from 'react-native';

interface Props {
    title: string;
    position?: 'br' | 'bl';
    onPress: () => void;
}

export const Fab = ( { title, onPress, position = 'br' } : Props) => {
    //Platform es para especificar la plataforma en la que se esta ejecutando la app
    const  ios = () => {
        return (
                <TouchableOpacity
                    activeOpacity={0.75}
                    style={[styles.fabLocation , (position === 'bl') ? styles.left : styles.right]}
                    onPress={onPress}
                >
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>{title}</Text>
                    </View>
                </TouchableOpacity>
        );
    };

    const android = () => {
        return (
            <View  style={[styles.fabLocation , (position === 'bl') ? styles.left : styles.right]}>
                <TouchableNativeFeedback
                    onPress={onPress}
                    background={ TouchableNativeFeedback.Ripple( '#28425B', false, 30)}
                >
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>{title}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    };

    return (Platform.OS === 'ios') ? ios() : android();

};

const styles = StyleSheet.create({
    fabLocation:{
        position: 'absolute',
        bottom: 25,
    },
    right:{
        right: 25,
    },
    left:{
        left: 25,
    },
    fab:{
        backgroundColor: '#5856D6',
        width:60,
        height:60,
        borderRadius:100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
    fabText:{
        color: 'white',
        fontSize: 25,
        //aliniar el texto en el centro
        alignSelf: 'center',
    },
});
