import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import CardNote from './CardNote';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigation from './HomeNavigation';
import {Provider} from "react-redux";
import {reduxStore} from "./redux/store/reduxStore";
const App = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    return (
        <Provider store={reduxStore}>
            <SafeAreaView style={[backgroundStyle, {flex: 1}]}>
                <StatusBar
                    barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                    backgroundColor={backgroundStyle.backgroundColor}
                />
                <NavigationContainer>
                    <HomeNavigation />
                </NavigationContainer>
            </SafeAreaView>
        </Provider>
    );
};

export default App;
