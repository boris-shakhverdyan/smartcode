import { createAsyncThunk } from "@reduxjs/toolkit";
import JsonServerAPI from "../../../api/JsonServerAPI";

export const fetchAuthUser = createAsyncThunk("auth/fetchAuthUser", async ({ username, password }) => {
    username = username.trim();
    password = password.trim();

    if (username && password && username.length >= 5 && password.length >= 5) {
        return (await JsonServerAPI.get(`users?username=${username}&password=${password}`)).data[0];
    }

    throw new Error("Username or Password is incorrect");
});
