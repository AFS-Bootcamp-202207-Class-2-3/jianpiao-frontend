import {configureStore} from "@reduxjs/toolkit"
import userSlice from "../pages/user/UserSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
    },
});

export default store;
