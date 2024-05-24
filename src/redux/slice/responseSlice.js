import { createSlice } from "@reduxjs/toolkit";



export const responseSlice = createSlice({
  name: "response",
  initialState: {
    response: [],
    selectedResponse: [],
  },
  reducers: {
    setAiResponse: (state, action) => {
      state.response = action.payload.value;
    },
    setSelectedResponse: (state, action) => {
      state.selectedResponse = action.payload.value;
    },
  },
});

export const { setAiResponse,setSelectedResponse } = responseSlice.actions;

export default responseSlice.reducer;