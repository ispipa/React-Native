import React from "react";
import {Button, Text, View} from "react-native";
import {StackScreenProps} from "@react-navigation/stack";
import {styles} from "../theme/appTheme";

interface Props extends StackScreenProps<any, any>{}
export const Page3Screen = ({ navigation }: Props) => {
    //regresar a la pagina anterior
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Page3Screen</Text>
            <Button title='Regresar' onPress={() => navigation.pop()}></Button>
            <Button title='Ir al Home(Pagina principal)' onPress={() => navigation.popToTop()}></Button>
        </View>
    );
};
