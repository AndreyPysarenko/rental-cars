import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { appReducer } from "./appState/slice";

import { favoriteReducer } from "./slice/favoriteSlice";
import { carsReducer } from "./slice/carsSlice";
import { filterReducer } from "./slice/filterSlice";

const persistConfig = {
  key: "favorite",
  storage,
  whitelist: ["favorites"],
};

const persistedReducer = persistReducer(persistConfig, favoriteReducer);

export const reducer = {
  favorite: persistedReducer,
  cars: carsReducer,
  filter: filterReducer,
  appState: appReducer,
};
