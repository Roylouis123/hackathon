import { createSlice } from "@reduxjs/toolkit";

export const responseSlice = createSlice({
  name: "response",
  initialState: {
    data: [],
  },
  reducers: {
    setAiResponse: (state, action) => {
      state.data = action.payload.value;
    },
  },
});

export const { setAiResponse } = responseSlice.actions;

export default responseSlice.reducer;
