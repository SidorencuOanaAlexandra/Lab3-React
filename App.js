import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from './screens/LogIn'
import List from './screens/List'
import {useEffect, useState} from 'react';
import repo from './repo'

const Stack = createNativeStackNavigator();

export default function App() {

  const [places,setPlaces] =useState(null)

 
  useEffect(() => {
    fetch("repo.json")
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then((data)=>{
        console.log(data);
      })
    // async function fetchList() {
    //   try{
    //     const resp = await fetch("repo.json");
    //     console.log(resp);
    //   }catch{

    //   }
    // }
  }, [])


  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="List" component={(props) => <List {...props} listElem={listElem}/>}/>
      </Stack.Navigator>
    </NavigationContainer>
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
