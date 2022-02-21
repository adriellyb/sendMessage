import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/** pages */
import Home from '../screens/Home';
import GetName from '../screens/GetName';
import GetEmail from '../screens/GetEmail';
import WriteMessage from '../screens/WriteMessage';
import SuccessScreen from '../screens/SuccessScreen';
import FailedScreen from '../screens/FailedScreen';

const Stack = createNativeStackNavigator();

export default function StackScreens() {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
                name='Home'
                component={Home}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name='GetName'
                component={GetName}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name='GetEmail'
                component={GetEmail}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name='WriteMessage'
                component={WriteMessage}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name='SuccessScreen'
                component={SuccessScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name='FailedScreen'
                component={FailedScreen}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}