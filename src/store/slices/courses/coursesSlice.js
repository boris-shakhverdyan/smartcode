import { createSlice } from "@reduxjs/toolkit";
import {
    addCourse,
    deleteCourse,
    fetchCourseById,
    fetchCourseByName,
    fetchCourses,
    saveCourse,
} from "./coursesApi";

const coursesSlice = createSlice({
    name: "courses",
    initialState: {
        list: [],
        edit: null,
        selected: null,
    },
    reducers: {
        setCoursesList(state, { payload }) {
            state.list = payload;
        },
        setSelectedCourse(state, { payload }) {
            state.selected = payload;
        },
    },
    extraReducers: {
        [fetchCourses.fulfilled]: (state, { payload }) => {
            state.list = payload;
        },
        [fetchCourses.rejected]: (_, action) => {
            console.error(action);
        },
        [fetchCourseByName.fulfilled]: (state, { payload }) => {
            state.selected = payload;
        },
        [fetchCourseByName.rejected]: (_, action) => {
            console.error(action);
        },
        [fetchCourseById.fulfilled]: (state, { payload }) => {
            state.edit = payload;
            state.selected = null;
        },
        [fetchCourseById.rejected]: (_, action) => {
            console.error(action);
        },
        [deleteCourse.fulfilled]: (state, { payload }) => {
            state.list = state.list.filter((item) => item.id !== +payload);
        },
        [deleteCourse.rejected]: (_, action) => {
            console.error(action);
        },
        [saveCourse.fulfilled]: (state, { payload }) => {
            state.edit = null;
            state.list = state.list.map((item) => (item.id === payload.id ? payload : item));
        },
        [saveCourse.rejected]: (_, action) => {
            console.error(action);
        },
        [addCourse.fulfilled]: (state, { payload }) => {
            state.list.push(payload);
        },
        [addCourse.rejected]: (_, action) => {
            console.error(action);
        },
    },
});

export const selectCoursesList = (state) => state.courses.list;
export const selectCourse = (state) => state.courses.selected;
export const selectEditableCourse = (state) => state.courses.edit;

export const { setCoursesList, setSelectedCourse } = coursesSlice.actions;

export const coursesReducer = coursesSlice.reducer;
