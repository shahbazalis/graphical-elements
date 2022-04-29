import { configureStore } from "@reduxjs/toolkit";
import elementsReducer from "./redux/elements-slice";

export const store = configureStore({
  reducer: {
    elements: elementsReducer,
  },
});
