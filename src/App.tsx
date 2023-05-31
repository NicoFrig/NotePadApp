import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigation from './HomeNavigation';
import {Provider} from "react-redux";
import {reduxStore} from "./redux/store/reduxStore";
const App = () => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <Provider store={reduxStore}>
            <SafeAreaView style={{flex: 1, backgroundColor:'white'}}>
                <StatusBar
                    barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                />
                <NavigationContainer>
                    <HomeNavigation />
                </NavigationContainer>
            </SafeAreaView>
        </Provider>
    );
};

export default App;
