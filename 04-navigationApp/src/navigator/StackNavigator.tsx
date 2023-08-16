import { createStackNavigator } from '@react-navigation/stack';
import {Page1Screen} from "../screens/Page1Screen";
import {Page2Screen} from "../screens/Page2Screen";
import {Page3Screen} from "../screens/Page3Screen";
import {PersonaScreen} from "../screens/PersonaScreen";

const Stack = createStackNavigator();

export const StackNavigator = () =>{
    return (
        <Stack.Navigator
            // initialRouteName="Page2Screnn"
            screenOptions={{
                //headerShown: false,
                headerStyle:{
                    elevation: 0, // android
                    shadowColor: 'transparent' // ios
                },
                cardStyle:{
                    backgroundColor: 'white'
                }
            }}
        >
            <Stack.Screen name="Page1Screnn" options={{title:"Page 1"}} component={Page1Screen} />
            <Stack.Screen name="Page2Screnn" options={{title:"Page 2"}} component={Page2Screen} />
            <Stack.Screen name="Page3Screnn" options={{title:"Page 3"}} component={Page3Screen} />
            <Stack.Screen name="PersonaScreen"  component={PersonaScreen} />
        </Stack.Navigator>
    );
}
