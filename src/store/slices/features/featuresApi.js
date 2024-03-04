import { createAsyncThunk } from "@reduxjs/toolkit";
import JsonServerAPI from "../../../api/JsonServerAPI";

export const fetchFeatures = createAsyncThunk("features/fetchFeatures", async () => {
    return (await JsonServerAPI.get("features?isDeleted=false")).data;
});

export const fetchFeature = createAsyncThunk("features/fetchFeature", async (id) => {
    return (await JsonServerAPI.get(`features/${id}`)).data;
});

export const saveFeature = createAsyncThunk(
    "features/saveFeature",
    async ({ id, title, description, icon }, { rejectWithValue }) => {
        id = +id.trim();
        title = title.trim();
        description = description.trim();
        icon = icon.trim();

        if (id && title && description && icon) {
            let featureData = {
                id,
                title,
                description,
                icon,
                isDeleted: false,
            };

            await JsonServerAPI.put(`features/${id}`, featureData);

            return featureData;
        }

        return rejectWithValue("Wrong values");
    }
);

export const deleteFeature = createAsyncThunk("features/deleteFeature", async (id, { rejectWithValue }) => {
    let feature = (await JsonServerAPI.get(`features/${id}`)).data;

    if (feature) {
        feature.isDeleted = true;

        await JsonServerAPI.put(`features/${id}`, feature);

        return id;
    }

    return rejectWithValue("Feature not found.");
});

export const addFeature = createAsyncThunk(
    "features/addFeature",
    async ({ title, description, icon }, { rejectWithValue }) => {
        title = title.trim();
        description = description.trim();
        icon = icon.trim();

        if (title && description && icon) {
            let featureData = {
                id: Date.now(),
                title,
                description,
                icon,
                isDeleted: false,
            };

            return await JsonServerAPI.post("features", featureData);
        }

        return rejectWithValue("Wrong values given");
    }
);
