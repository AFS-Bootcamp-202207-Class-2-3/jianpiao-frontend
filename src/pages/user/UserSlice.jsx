import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "User",
  initialState: {
    isLoginGlobal: false,
  },
  reducers: {
    updateLoginStatus: (state, action) => {
      state.isLoginGlobal = action.payload;
    }
  }
});

export const { updateLoginStatus } = userSlice.actions;
export default userSlice.reducer;
