import { configureStore } from "@reduxjs/toolkit";
import languageSliceReducer from "./slices/languageSlice";
import projectSliceReducer from "./slices/projectSlice";

export const store = configureStore({
  reducer: {
    language: languageSliceReducer,
    projects: projectSliceReducer
  }
});