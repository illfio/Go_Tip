import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import businessReducer from "./features/businessSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    business: businessReducer,
  },
});
