import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    language: "en"
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    switchLanguage: (state) => {
        if(state.language === "en") {
            state.language = "fr";
            document.querySelector("html")?.setAttribute("lang", "fr");
        } else {
            state.language = "en";
            document.querySelector("html")?.setAttribute("lang", "en");
        }
    }
  }
});

export const { switchLanguage } = languageSlice.actions;
export default languageSlice.reducer;