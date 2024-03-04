import { createSlice } from "@reduxjs/toolkit";
import { addFeature, deleteFeature, fetchFeature, fetchFeatures, saveFeature } from "./featuresApi";

const featuresSlice = createSlice({
    name: "features",
    initialState: {
        list: [],
        edit: null,
    },
    reducers: {
        setFeatures(state, { payload }) {
            state.list = payload;
        },
    },
    extraReducers: {
        [fetchFeatures.fulfilled]: (state, { payload }) => {
            state.list = payload;
        },
        [fetchFeatures.rejected]: (_, action) => {
            console.error(action);
        },
        [fetchFeature.fulfilled]: (state, { payload }) => {
            state.edit = payload;
        },
        [fetchFeature.rejected]: (_, action) => {
            console.error(action);
        },
        [saveFeature.fulfilled]: (state, { payload }) => {
            state.edit = null;
            state.list = state.list.map((item) => (item.id === payload.id ? payload : item));
        },
        [saveFeature.rejected]: (_, action) => {
            console.error(action);
        },
        [deleteFeature.fulfilled]: (state, { payload }) => {
            state.list = state.list.filter((item) => item.id !== +payload);
        },
        [deleteFeature.rejected]: (_, action) => {
            console.error(action);
        },
        [addFeature.fulfilled]: (state, { payload }) => {
            state.list.push(payload);
        },
        [addFeature.rejected]: (_, action) => {
            console.error(action);
        },
    },
});

export const selectFeaturesList = (state) => state.features.list;
export const selectEditableFeature = (state) => state.features.edit;

export const { setFeatures } = featuresSlice.actions;

export const featuresReducer = featuresSlice.reducer;
