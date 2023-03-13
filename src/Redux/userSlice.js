import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "registerData",
  initialState: {
    email: "",
    password: "",
  },
  reducers: {
    registerReq: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export const { registerReq } = userSlice.actions;
export default userSlice.reducer;
