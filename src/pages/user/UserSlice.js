import { createSlice } from "@reduxjs/toolkit";
import { JPApi } from "../../api/http";

const userSlice = createSlice({
  name: "User",
  initialState: {
    isLoginGlobal: false,
    roles: [],
    permissions: [],
    userInfo: {},
  },
  reducers: {
    updateLoginStatus: (state, action) => {
      state.isLoginGlobal = action.payload;
    },
    updateRoles: (state, action) => {
      state.roles = action.payload;
    },
    updatePermissions: (state, action) => {
      state.permissions = action.payload;
    },
    updateUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    logout: (state, action) => {
      JPApi("/user/logout", "post", {}, () => {
        localStorage.removeItem("jpUserInfo");
        localStorage.removeItem("jptoken");
      });
      return { ...state, isLoginGlobal: false, userInfo: {} };
    },
  },
});

export const {
  updateLoginStatus,
  updatePermissions,
  updateRoles,
  updateUserInfo,
  logout,
} = userSlice.actions;
export default userSlice.reducer;
