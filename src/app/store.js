import { configureStore } from "@reduxjs/toolkit";
import languageSliceReducer from "./slices/languageSlice";

export const store = configureStore({
  reducer: {
    language: languageSliceReducer
  }
});