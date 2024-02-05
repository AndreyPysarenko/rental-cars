import { makeUniqueBrandsState } from "service/serviceFunc";

export const handleGetAllCarsThunkFulfilled = (state, { payload }) => {
  state.allCars = payload;
  state.carsBrands = makeUniqueBrandsState(payload);
};

export const handleGetCarsThunkFulfilled = (state, { payload }) => {
  state.cars = [...state.cars, ...payload];
};
