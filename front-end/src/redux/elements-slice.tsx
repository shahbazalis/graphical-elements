import { createSlice } from "@reduxjs/toolkit";

const elementsSlice = createSlice({
  name: "elements",
  initialState: [],
  reducers: {
    elementAdded(state, action) {},
  },
});

export const { elementAdded } = elementsSlice.actions;
export default elementsSlice.reducer;
