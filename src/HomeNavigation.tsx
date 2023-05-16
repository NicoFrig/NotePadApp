import React from 'react';
import CardNote from './CardNote';
import {createStackNavigator} from '@react-navigation/stack';
import CardDetail from "./CardDetail";

export type HomeNavigationParams = {
    CardNote: undefined;
    CardDetail: undefined;
};

const Stack = createStackNavigator<HomeNavigationParams>();

const HomeNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="CardNote" component={CardNote} />
            <Stack.Screen name="CardDetail" component={CardDetail} />
        </Stack.Navigator>
    );
};

export default HomeNavigation;
