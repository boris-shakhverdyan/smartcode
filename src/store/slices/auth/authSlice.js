import { createSlice } from "@reduxjs/toolkit";
import { fetchAuthUser } from "./authApi";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        error: null,
    },
    reducers: {
        setAuthUser(state, { payload }) {
            if (payload.id) {
                state.user = payload;
                state.error = null;
                localStorage.setItem("user", JSON.stringify(payload));
            } else {
                state.user = null;
                localStorage.removeItem("user");
                state.error = "Username or Password is incorrect.";
            }
        },
        logoutUser(state) {
            state.user = null;
            state.error = null;
            localStorage.removeItem("user");
        },
        setAuthError(state, { payload }) {
            state.user = null;
            state.error = payload;
        },
    },
    extraReducers: {
        [fetchAuthUser.fulfilled]: (state, { payload }) => {
            if (payload?.id) {
                state.user = payload;
                state.error = null;
                localStorage.setItem("user", JSON.stringify(payload));
            } else {
                state.user = null;
                localStorage.removeItem("user");
                state.error = "Username or Password is incorrect.";
            }
        },
        [fetchAuthUser.rejected]: (state, { error }) => {
            state.error = error.message;
            state.user = null;
            localStorage.removeItem("user");
            console.error(error.message);
        },
    },
});

export const selectAuthUser = (state) => state.auth.user;
export const selectAuthError = (state) => state.auth.error;

export const { setAuthUser, setAuthError, logoutUser } = authSlice.actions;

export const authReducer = authSlice.reducer;
