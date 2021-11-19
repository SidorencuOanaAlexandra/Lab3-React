import React, { useState } from 'react';
import { } from 'react-native';
import { } from 'react-navigation'
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { FlatList } from 'react-native-gesture-handler';
//import RoundIconBtn from '../components/RoundIconBtn';


const List = ({ navigation }) => {
  const places = useSelector(state => state.places.list)
  // const [place, setPlace] = useState({});

  // console.log(count)
  // const dispatch = useDispatch()
  return (
    <View >{places.map((place) =>
      <TouchableOpacity style={ListStyles.card} key={place.id} onPress={() => navigation.navigate('DetailsUpdate', { place: place })}>
        <Text>{place.name}</Text>

      </TouchableOpacity >
    )
    }
      <Button style={ListStyles.but}
        title='Add'
        onPress={() => navigation.navigate('Add')}>
      </Button>
    </View >
  )

};

// const width = Dimensions.get('window').width - 50;
export const ListStyles = StyleSheet.create({
  card: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: '#FF8958A7',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    width: 300,
    height: 70,
    elevation: 5,
  },
  but: {
    width: 150,
    height: 30,
  }
});

export default List;