import React, {useEffect} from "react";
import {Button, Text, View} from "react-native";
import {styles} from "../theme/appTheme";
import {useNavigation} from "@react-navigation/native";

export const Page2Screen = () => {
    //menos recomendado
    const navigator  = useNavigation();
    useEffect(() => {
        navigator.setOptions({
            title: 'Hola Mundo',
            headerBackTitle: 'Atras' // IOS VACIO ES EL IDIOMA DEL DISPOSITIVO
        });
    }, []);
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Page2Screen</Text>
            <Button title='Ir pagina 3' onPress={ () => {
                navigator.navigate('Page3Screnn')
            }}></Button>
        </View>
    );
};
