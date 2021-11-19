import { configureStore } from '@reduxjs/toolkit'
import placeReducer from './placesSlice'


export default configureStore({
  reducer: {
    places: placeReducer
  }
})