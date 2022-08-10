import {createSlice} from "@reduxjs/toolkit";

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
        }
    }
});

export const {updateLoginStatus, updatePermissions, updateRoles, updateUserInfo} = userSlice.actions;
export default userSlice.reducer;
