import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";

const Store = configureStore({
  reducer: {
    auth: AuthSlice,
    //Add one more Post Flow
  },
});
export default Store;
