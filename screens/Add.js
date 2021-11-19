import React, { useState } from 'react';
import { Button, View } from 'react-native';
import { } from 'react-navigation'
import {
    TextInput,
    Alert,
    StyleSheet,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler';
import { addPlace, removePlace, updatePlace } from '../placesSlice';
//import RoundIconBtn from '../components/RoundIconBtn';


const Add = ({ navigation, route }) => {

    const dispatch = useDispatch();
    const [id, setId] = useState();
    const [name, setName] = useState('Name');
    const [city, setCity] = useState('City');
    const [lat, setLat] = useState('Lat');
    const [long, setLong] = useState('Long');
    const [description, setDescription] = useState('Description');
    const [availability, setAvailability] = useState('Availability');
    const [imgUrl, setImgUrl] = useState('ImgUrl');


    return (

        <ScrollView>
            <TextInput
                style={styles.textInput}
                multiline={true}
                onChangeText={e => setName(e)}
                value={name}
            />
            <TextInput
                style={styles.textInput}
                multiline={true}
                onChangeText={e => setCity(e)}
                value={city}
            />
            <TextInput
                style={styles.textInput}
                multiline={true}
                onChangeText={e => setLat(e)}
                value={lat}
            />
            <TextInput
                style={styles.textInput}
                multiline={true}
                onChangeText={e => setLong(e)}
                value={long}
            />
            <TextInput
                style={styles.textInput2}
                multiline={true}
                onChangeText={e => setDescription(e)}
                value={description}
            />
            <TextInput
                style={styles.textInput}
                multiline={true}
                onChangeText={e => setAvailability(e)}
                value={availability}
            />
            <TextInput
                style={styles.textInput}
                multiline={true}
                onChangeText={e => setImgUrl(e)}
                value={imgUrl}
            />
            <Button
                title='Add'
                onPress={() => dispatch(
                    addPlace(({
                        ...route.params,
                        id: id,
                        name: name,
                        city: city,
                        lat: lat,
                        long: long,
                        description: description,
                        availability: availability,
                        imgUrl: imgUrl,
                    }))
                )}
            >
            </Button>
        </ScrollView>

    )

};

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 2,
        borderColor: "#FF8958A7",
        width: 200,
        height: 30,
        borderRadius: 10,
        paddingLeft: 15,

    },
    textInput2: {
        borderWidth: 2,
        borderColor: "#FF8958A7",
        width: 200,
        height: 200,
        borderRadius: 10,
        paddingLeft: 15,

    },

});





export default Add;