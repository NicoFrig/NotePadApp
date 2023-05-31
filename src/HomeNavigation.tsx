import React from 'react';
import CardNote from './CardNote';
import {createStackNavigator, StackCardInterpolationProps} from '@react-navigation/stack';
import CardDetail from "./CardDetail";
import {TransitionSpec} from "@react-navigation/stack/lib/typescript/src/types";

export type HomeNavigationParams = {
    CardNote: undefined;
    CardDetail: {index?:number};
};

const Stack = createStackNavigator<HomeNavigationParams>();

const forFade = (interpolator : StackCardInterpolationProps) => {
    const {current} = interpolator;
    return ({
        cardStyle: {
            opacity: current.progress,
        },
    });
};

const HomeNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="CardNote" component={CardNote} options={{cardStyleInterpolator: forFade}}/>
            <Stack.Screen name="CardDetail" component={CardDetail} options={{cardStyleInterpolator: forFade}}/>
        </Stack.Navigator>
    );
};

export default HomeNavigation;
