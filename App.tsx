/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from './src/Products';
import { Provider } from 'react-redux';
import MyStore from './src/ReduxToolkit/MyStore';
import CartScreen from './src/CartScreen';
import Main from './src/Main';
import ThemeScreen from './src/ThemeScreen';
import LanguageScreen from './src/LanguageScreen';
function App(): JSX.Element {

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={MyStore}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='MainScreeen'>
        <Stack.Screen name="MainScreen" component={Main} />
          <Stack.Screen name="ProductScreen" component={Products} />
          <Stack.Screen name="CartScreen" component={CartScreen} />
          <Stack.Screen name="ThemeScreen" component={ThemeScreen} />
          <Stack.Screen name="LanguageScreen" component={LanguageScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
