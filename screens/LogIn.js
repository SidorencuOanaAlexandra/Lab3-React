//import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { } from 'react-native';
import { } from 'react-navigation'
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  StatusBar,
  Dimensions,
  Button,
} from 'react-native';
//import RoundIconBtn from '../components/RoundIconBtn';


const Intro = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Button
        title='LogIn'
        onPress={() => navigation.navigate('List')}
      >
        LOG IN
      </Button>
    </View>
  )

};

// const width = Dimensions.get('window').width - 50;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
  //   textInput: {
  //     borderWidth: 2,
  //     borderColor: colors.PRIMARY,
  //     color: colors.PRIMARY,
  //     width,
  //     height: 50,
  //     borderRadius: 10,
  //     paddingLeft: 15,
  //     fontSize: 25,
  //     marginBottom: 15,
  //   },
  //   inputTitle: {
  //     alignSelf: 'flex-start',
  //     paddingLeft: 25,
  //     marginBottom: 5,
  //     opacity: 0.5,
  //   },
});

export default Intro;