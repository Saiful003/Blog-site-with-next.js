import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLightTheme: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    switchTheme: (state) => {
      state.isLightTheme = !state.isLightTheme;
    },
  },
});

export const { switchTheme } = themeSlice.actions;
export default themeSlice.reducer;
