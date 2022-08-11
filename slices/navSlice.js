import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // location of host
  origin: null,
  destination: null,
  travelTimeInformation: null,
  distanceOfTravel: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  // assigning element from variables based on action
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTime: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
    setDistance: (state, action) => {
      state.distanceOfTravel = action.payload;
    },
  },
});

// Access to values for other sections outside App.js
export const { setOrigin, setDestination, setDistance, setTravelTime } =
  navSlice.actions;

// Selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravel = (state) => state.nav.travelTimeInformation;
export const selectDistance = (state) => state.nav.distanceOfTravel;

export default navSlice.reducer;
