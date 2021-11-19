import { createSlice } from '@reduxjs/toolkit'


// const list = [
//     {
//         id:'1',
//         name:'Castelul Corvinilor',
//         city:'Hunedoara',
//         lat:'45',
//         long:'22',
//         description:'Castelul Corvinilor, numit și Castelul Huniazilor sau al Hunedoarei, este cetatea medievală a Hunedoarei, unul din cele mai importante monumente de arhitectură gotică din România.\n',
//         availability:'10:00-16:00 L-S',
//         imgUrl:'https://www.descopera.ro/wp-content/uploads/2021/05/castelul-corvinilor-hunedoara-shutter_descopera-3-scaled.jpg'

//     },
//     {
//         id:'2',
//         name:'Castelul Corvinilor',
//         city:'Hunedoara',
//         lat:'45',
//         long:'22',
//         description:'Castelul Corvinilor, numit și Castelul Huniazilor sau al Hunedoarei, este cetatea medievală a Hunedoarei, unul din cele mai importante monumente de arhitectură gotică din România.\n',
//         availability:'10:00-16:00 L-S',
//         imgUrl:'https://www.descopera.ro/wp-content/uploads/2021/05/castelul-corvinilor-hunedoara-shutter_descopera-3-scaled.jpg'

//     },
//     {
//         id:'3',
//         name:'Castelul Corvinilor',
//         city:'Hunedoara',
//         lat:'45',
//         long:'22',
//         description:'Castelul Corvinilor, numit și Castelul Huniazilor sau al Hunedoarei, este cetatea medievală a Hunedoarei, unul din cele mai importante monumente de arhitectură gotică din România.\n',
//         availability:'10:00-16:00 L-S',
//         imgUrl:'https://www.descopera.ro/wp-content/uploads/2021/05/castelul-corvinilor-hunedoara-shutter_descopera-3-scaled.jpg'

//     },
// ];

const initialState = {
  list: [
    {
      id: '1',
      name: 'Castelul Corvinilor',
      city: 'Hunedoara',
      lat: '45',
      long: '22',
      description: 'Castelul Corvinilor, numit și Castelul Huniazilor sau al Hunedoarei, este cetatea medievală a Hunedoarei, unul din cele mai importante monumente de arhitectură gotică din România.\n',
      availability: '10:00-16:00 L-S',
      imgUrl: 'https://www.descopera.ro/wp-content/uploads/2021/05/castelul-corvinilor-hunedoara-shutter_descopera-3-scaled.jpg'

    },
    {
      id: '2',
      name: 'Castelul Corvinilor',
      city: 'Hunedoara',
      lat: '45',
      long: '22',
      description: 'Castelul Corvinilor, numit și Castelul Huniazilor sau al Hunedoarei, este cetatea medievală a Hunedoarei, unul din cele mai importante monumente de arhitectură gotică din România.\n',
      availability: '10:00-16:00 L-S',
      imgUrl: 'https://www.descopera.ro/wp-content/uploads/2021/05/castelul-corvinilor-hunedoara-shutter_descopera-3-scaled.jpg'

    },
    {
      id: '3',
      name: 'Castelul Corvinilor',
      city: 'Hunedoara',
      lat: '45',
      long: '22',
      description: 'Castelul Corvinilor, numit și Castelul Huniazilor sau al Hunedoarei, este cetatea medievală a Hunedoarei, unul din cele mai importante monumente de arhitectură gotică din România.\n',
      availability: '10:00-16:00 L-S',
      imgUrl: 'https://www.descopera.ro/wp-content/uploads/2021/05/castelul-corvinilor-hunedoara-shutter_descopera-3-scaled.jpg'

    },
  ]
};

export const placesSlice = createSlice({
  name: 'places',
  initialState: initialState,
  reducers: {
    addPlace: (state, action) => {
      let max = 0;
      state.list.forEach(element => {
        if (element.id > max) {
          max = element.id;
        }
      });
      action.id = max + 1;
      state.list.push(action.payload)
    },
    updatePlace: (state, action) => {
      let i = state.list.findIndex(x => x.id === action.payload.id);
      state.list[i] = action.payload;
    },
    removePlace: (state, action) => {
      let i = state.list.findIndex(x => x.id === action.payload);
      state.list.splice(i, 1);
    },
  }
})

// Action creators are generated for each case reducer function
export const { addPlace, updatePlace, removePlace } = placesSlice.actions

export default placesSlice.reducer