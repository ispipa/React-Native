import React from 'react';
//import {HolaMundoScreen} from './src/screens/HolaMundoScreen';
//import {CounterScreen} from "./src/screens/CounterScreen";
//import {BoxObjectModelScreen} from "./src/screens/BoxObjectModelScreen";
//import {DimensionsScreen} from "./src/screens/DimensionsScreen";
import {PositionScreen} from "./src/screens/PositionScreen";
import {SafeAreaView} from "react-native";

export const App = () => {
    return (
        <SafeAreaView style={{
            flex:1,
        }} >
            {/*<HolaMundoScreen/>
            <CounterScreen />*/}
            {/*<BoxObjectModelScreen/>*/}
            {/*<DimensionsScreen/>*/}
            <PositionScreen />
        </SafeAreaView>
    );
};
