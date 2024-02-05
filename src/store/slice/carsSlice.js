import { createSlice } from "@reduxjs/toolkit";
import { getCarsThunk, getAllCarsThunk } from "../operations";
import {
  handleGetAllCarsThunkFulfilled,
  handleGetCarsThunkFulfilled,
} from "./heipers";

const initialState = {
  cars: [],
  allCars: [],
  carsBrands: [],
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllCarsThunk.fulfilled, handleGetAllCarsThunkFulfilled)
      .addCase(getCarsThunk.fulfilled, handleGetCarsThunkFulfilled);
  },
});

export const carsReducer = carsSlice.reducer;
