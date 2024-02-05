import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://65ba7f71b4d53c0665531164.mockapi.io";

export const LIMIT = 12;

const getAllCars = async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get("/adverts");
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
};

const getCars = async (page, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(`/adverts?page=${page}&limit=${LIMIT}`);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
};

export const getCarsThunk = createAsyncThunk("cars/getCars", getCars);
export const getAllCarsThunk = createAsyncThunk("cars/getAllCars", getAllCars);
