import { createAsyncThunk } from "@reduxjs/toolkit";
import JsonServerAPI from "../../../api/JsonServerAPI";

export const fetchCourses = createAsyncThunk("courses/fetchCourses", async () => {
    return (await JsonServerAPI.get("courses?isDeleted=false")).data;
});

export const fetchCourseByName = createAsyncThunk("courses/fetchCourseByName", async (name) => {
    return (await JsonServerAPI.get(`courses?name=${name}`)).data[0];
});

export const fetchCourseById = createAsyncThunk("courses/fetchCourseById", async (id) => {
    return (await JsonServerAPI.get(`courses/${id}`)).data;
});

export const saveCourse = createAsyncThunk(
    "courses/saveCourse",
    async (
        {
            id,
            name,
            duration,
            price,
            smallPoster,
            bigPoster,
            shortTitle,
            title,
            subtitle,
            mainTitle,
            stage1,
            stage2,
            stage3,
            stage4,
            content,
            offer,
        },
        { rejectWithValue }
    ) => {
        id = +id.trim();
        name = name.trim();
        duration = +duration.trim();
        price = +price.trim();
        smallPoster = smallPoster.trim();
        bigPoster = bigPoster.trim();
        shortTitle = shortTitle.trim();
        title = title.trim();
        subtitle = subtitle.trim();
        mainTitle = mainTitle.trim();
        stage1 = stage1.trim();
        stage2 = stage2.trim();
        stage3 = stage3.trim();
        stage4 = stage4.trim();
        content = content.trim();
        offer = offer.trim();

        if (
            id &&
            name &&
            duration &&
            price &&
            smallPoster &&
            bigPoster &&
            shortTitle &&
            title &&
            subtitle &&
            mainTitle &&
            content &&
            offer
        ) {
            let courseData = {
                id,
                name,
                duration,
                price,
                posters: {
                    small: smallPoster,
                    big: bigPoster,
                },
                shortTitle,
                title,
                subtitle,
                description: {
                    mainTitle,
                    stages: {
                        first: stage1 || "",
                        second: stage2 || "",
                        third: stage3 || "",
                        fourth: stage4 || "",
                    },
                    content,
                    offer,
                },
                isDeleted: false,
            };

            await JsonServerAPI.put(`courses/${id}`, courseData);

            return courseData;
        }

        return rejectWithValue("Wrong values");
    }
);

export const deleteCourse = createAsyncThunk("courses/deleteCourse", async (id, { rejectWithValue }) => {
    let course = (await JsonServerAPI.get(`courses/${id}`)).data;

    if (course) {
        course.isDeleted = true;

        await JsonServerAPI.put(`courses/${id}`, course);

        return id;
    }

    return rejectWithValue("Course not found.");
});

export const addCourse = createAsyncThunk(
    "courses/addCourse",
    async (
        {
            name,
            duration,
            price,
            smallPoster,
            bigPoster,
            shortTitle,
            title,
            subtitle,
            mainTitle,
            stage1,
            stage2,
            stage3,
            stage4,
            content,
            offer,
        },
        { rejectWithValue }
    ) => {
        name = name.trim();
        duration = +duration.trim();
        price = +price.trim();
        smallPoster = smallPoster.trim();
        bigPoster = bigPoster.trim();
        shortTitle = shortTitle.trim();
        title = title.trim();
        subtitle = subtitle.trim();
        mainTitle = mainTitle.trim();
        stage1 = stage1.trim();
        stage2 = stage2.trim();
        stage3 = stage3.trim();
        stage4 = stage4.trim();
        content = content.trim();
        offer = offer.trim();

        if (
            name &&
            duration &&
            price &&
            smallPoster &&
            bigPoster &&
            shortTitle &&
            title &&
            subtitle &&
            mainTitle &&
            content &&
            offer
        ) {
            let courseData = {
                id: Date.now(),
                name,
                duration,
                price,
                posters: {
                    small: smallPoster,
                    big: bigPoster,
                },
                shortTitle,
                title,
                subtitle,
                description: {
                    mainTitle,
                    stages: {
                        first: stage1,
                        second: stage2,
                        third: stage3,
                        fourth: stage4,
                    },
                    content,
                    offer,
                },
                isDeleted: false,
            };

            await JsonServerAPI.post(`courses`, courseData);

            return courseData;
        }

        return rejectWithValue("Wrong values");
    }
);
