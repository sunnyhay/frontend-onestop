import { configureStore } from "@reduxjs/toolkit";
import collegesReducer from "../features/colleges/collegesSlice";

export default configureStore({
  reducer: {
    colleges: collegesReducer,
  },
});
