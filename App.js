import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from './screens/LogIn'
import List from './screens/List'
import Add from './screens/Add'
import DetailsUpdate from './screens/DetailsUpdate'
import { useEffect, useState } from 'react';
import repo from './repo'
import store from './store'
import { Provider } from 'react-redux'

const Stack = createNativeStackNavigator();

export default function App() {

  const [places, setPlaces] = useState(null)


  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="LogIn" component={LogIn} />
          <Stack.Screen name="List" component={List} />
          <Stack.Screen name="DetailsUpdate" component={DetailsUpdate} />
          <Stack.Screen name="Add" component={Add} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

