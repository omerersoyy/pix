/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import MainScreen from './containers/MainScreen';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import { store } from './redux';

const App = () => (
    <Provider store={store}>
        <MainScreen />
    </Provider>
)

AppRegistry.registerComponent(appName, () => App);
