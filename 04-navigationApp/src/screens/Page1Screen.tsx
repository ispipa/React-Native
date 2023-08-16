import React from "react";
import {Button, Text, TouchableOpacity, View} from "react-native";
import {StackScreenProps} from "@react-navigation/stack";
import {styles} from "../theme/appTheme";

interface Props extends StackScreenProps<any, any>{}
export const Page1Screen = ({ navigation }: Props ) => {
    //mas recomendado
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Page1Screen</Text>
            <Button title="pagina 2" onPress={() => navigation.navigate('Page2Screnn')}></Button>
            <Text style={styles.title}>Navegar con Argumentos</Text>
            <TouchableOpacity onPress={() => navigation.navigate('PersonaScreen',{
                id: 1,
                nombre: 'Pablo',
            })}>
                <Text style={styles.title}>Enviar con Argumentos</Text>
            </TouchableOpacity>
        </View>
    );
};

