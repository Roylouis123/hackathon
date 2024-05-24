import { createSlice } from "@reduxjs/toolkit";

export const responseSlice = createSlice({
  name: "response",
  initialState: {
    aiResponse: [],
  },
  reducers: {
    setAiResponse: (state, action) => {
      state.documents = action.payload.value;
    },
  },
});

export const { setAiResponse } = responseSlice.actions;

export default responseSlice.reducer;