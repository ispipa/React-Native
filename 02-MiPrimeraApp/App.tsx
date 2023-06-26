import React from 'react';
import {SafeAreaView} from "react-native";
//import {HolaMundoScreen} from './src/screens/HolaMundoScreen';
//import {CounterScreen} from "./src/screens/CounterScreen";
//import {BoxObjectModelScreen} from "./src/screens/BoxObjectModelScreen";
//import {DimensionsScreen} from "./src/screens/DimensionsScreen";
//import {PositionRelativeScreen} from "./src/screens/PositionRelativeScreen";
//import {PositionAbsoluteScreen} from "./src/screens/PositionAbsoluteScreen";
//import {FlexScreen} from "./src/screens/FlexScreen";
//import {TaskScreen5} from "./src/screens/TaskScreen5";
//import {TaskScreen1} from "./src/screens/TaskFlex/TaskScreen1";
//import {TaskScreen2} from "./src/screens/TaskFlex/TaskScreen2";
//import {TaskScreen3} from "./src/screens/TaskFlex/TaskScreen3";
//import {TaskScreen4} from "./src/screens/TaskFlex/TaskScreen4";
//import {TaskScreen5} from "./src/screens/TaskFlex/TaskScreen5";
//import {TaskScreen6} from "./src/screens/TaskFlex/TaskScreen6";
//import {TaskScreen7} from "./src/screens/TaskFlex/TaskScreen7";
//import {TaskScreen8} from "./src/screens/TaskFlex/TaskScreen8";
//import {TaskScreen9} from "./src/screens/TaskFlex/TaskScreen9";
import {TaskScreen10} from "./src/screens/TaskFlex/TaskScreen10";

export const App = () => {
    return (
        <SafeAreaView style={{
            flex:1,
        }} >
            {/*<HolaMundoScreen/>
            <CounterScreen />*/}
            {/*<BoxObjectModelScreen/>*/}
            {/*<DimensionsScreen/>*/}
            {/*<PositionRelativeScreen/>*/}
            {/*<PositionAbsoluteScreen />*/}
            {/*<FlexScreen />*/}
            <TaskScreen10 />
        </SafeAreaView>
    );
};
