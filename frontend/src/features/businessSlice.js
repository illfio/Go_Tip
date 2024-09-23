import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  business: {
    name: "",
    address: "",
    city: "",
    state: "",
    phoneNumber: "",
    business_image_url: "",
    banner_image_url: "",
    staffAmount: "",
    workers: [],
  },
  selected: false,
};

export const businessSlice = createSlice({
  name: "business",
  initialState,
  reducers: {
    mountBusiness: (state, action) => {
      state.business = { ...action.payload };
      state.selected = true;
    },
    dismountBusiness: (state, action) => {
      state.business = { ...action.payload };
      state.selected = false;
    },
  },
});

export const { mountBusiness, mountWorkers, dismountBusiness } =
  businessSlice.actions;
export default businessSlice.reducer;
