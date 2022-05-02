import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GraphicalElementsInterface } from "../interfaces/GraphicalElementsInterface";

// Define the initial state using that type
const initialState: GraphicalElementsInterface = {
  value: [],
};

export const elementsSlice = createSlice({
  name: "elements",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    loadData: (
      state: GraphicalElementsInterface,
      action: PayloadAction<GraphicalElementsInterface>
    ) => {
      state.value = action.payload.value;
    },
  },
});

export const { loadData } = elementsSlice.actions;
export default elementsSlice.reducer;
