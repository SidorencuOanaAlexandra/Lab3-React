import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { } from 'react-navigation'
import {
    TextInput,
    Alert,
    StyleSheet,

} from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler';
import { removePlace, updatePlace } from '../placesSlice';

//import RoundIconBtn from '../components/RoundIconBtn';


const DetailsUpdate = ({ navigation, route }) => {

    const dispatch = useDispatch();
    const [id, setId] = useState(route.params.place.id);
    const [name, setName] = useState(route.params.place.name);
    const [city, setCity] = useState(route.params.place.city);
    const [lat, setLat] = useState(route.params.place.lat);
    const [long, setLong] = useState(route.params.place.long);
    const [description, setDescription] = useState(route.params.place.description);
    const [availability, setAvailability] = useState(route.params.place.availability);
    const [imgUrl, setImgUrl] = useState(route.params.place.imgUrl);
    const [notify, setNotify] = useState();


    const handleDelete = () => {
        console.log(route.params.place.id)
        dispatch(removePlace(route.params.place.id));
        navigation.navigate('List');
    };

    const showAlert = () =>
        Alert.alert(
            'DELETE ITEM',
            'Are you sure you want to delete this product?',
            [
                {
                    text: 'NO',
                    onPress: () => { },
                    style: 'cancel',
                },
                { text: 'YES', onPress: () => handleDelete() },
            ],
            {
                cancelable: true,
                onDismiss: () => { },
            },
        );

    return (

        <ScrollView>

            <Text>Name</Text>
            <TextInput
                style={styles.textInput}
                multiline={true}
                onChangeText={e => setName(e)}
                value={name}
            />
            <Text>City</Text>
            <TextInput
                style={styles.textInput}
                multiline={true}
                onChangeText={e => setCity(e)}
                value={city}

            />
            <Text>Lat</Text>
            <TextInput
                style={styles.textInput}
                multiline={true}
                onChangeText={e => setLat(e)}
                value={lat}
            />
            <Text>Long</Text>
            <TextInput
                style={styles.textInput}
                multiline={true}
                onChangeText={e => setLong(e)}
                value={long}
            />
            <Text>Description</Text>
            <TextInput
                style={styles.textInput2}
                multiline={true}
                onChangeText={e => setDescription(e)}
                value={description}
            />
            <Text>Availability</Text>
            <TextInput
                style={styles.textInput}
                multiline={true}
                onChangeText={e => setAvailability(e)}
                value={availability}
            />
            <Text>ImgUrl</Text>
            <TextInput
                style={styles.textInput}
                multiline={true}
                onChangeText={e => setImgUrl(e)}
                value={imgUrl}
            />
            <Button
                title='update'
                onPress={() => {
                    if (name == "") {
                        Alert.alert("Invalid!")
                    } else {
                        dispatch(
                            updatePlace(({
                                ...route.params.place,
                                name: name,
                                city: city,
                                lat: lat,
                                long: long,
                                description: description,
                                availability: availability,
                                imgUrl: imgUrl,
                            }))
                        )
                    }
                }}
            >
            </Button>



            <Button
                title='delete'
                onPress={showAlert}
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



export default DetailsUpdate;