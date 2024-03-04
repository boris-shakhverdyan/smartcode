import { createSlice } from "@reduxjs/toolkit";
import { addPartner, deletePartner, fetchPartner, fetchPartners, savePartner } from "./partnersApi";

const partnersSlice = createSlice({
    name: "partners",
    initialState: {
        list: [],
        edit: null,
    },
    reducers: {
        setPartners(state, { payload }) {
            state.list = payload;
        },
        setEditablePartner(state, { payload }) {
            state.edit = payload;
        },
    },
    extraReducers: {
        [fetchPartners.fulfilled]: (state, { payload }) => {
            state.list = payload;
        },
        [fetchPartners.rejected]: (_, action) => {
            console.error(action);
        },
        [fetchPartner.fulfilled]: (state, { payload }) => {
            state.edit = payload;
        },
        [fetchPartner.rejected]: (_, action) => {
            console.error(action);
        },
        [savePartner.fulfilled]: (state, { payload }) => {
            state.edit = null;
            state.list = state.list.map((item) => (item.id === payload.id ? payload : item));
        },
        [savePartner.rejected]: (_, action) => {
            console.error(action);
        },
        [deletePartner.fulfilled]: (state, { payload }) => {
            state.list = state.list.filter((item) => item.id !== +payload);
        },
        [deletePartner.rejected]: (_, action) => {
            console.error(action);
        },
        [addPartner.fulfilled]: (state, { payload }) => {
            state.list.push(payload);
        },
        [addPartner.rejected]: (_, action) => {
            console.error(action);
        },
    },
});

export const selectPartnersList = (state) => state.partners.list;
export const selectEditablePartner = (state) => state.partners.edit;

export const { setPartners, setEditablePartner } = partnersSlice.actions;

export const partnersReducer = partnersSlice.reducer;
