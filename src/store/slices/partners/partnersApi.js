import { createAsyncThunk } from "@reduxjs/toolkit";
import JsonServerAPI from "../../../api/JsonServerAPI";

export const fetchPartners = createAsyncThunk("partners/fetchPartners", async () => {
    return (await JsonServerAPI.get("partners?isDeleted=false")).data;
});

export const fetchPartner = createAsyncThunk("partners/fetchPartner", async (id) => {
    return (await JsonServerAPI.get(`partners/${id}`)).data;
});

export const savePartner = createAsyncThunk(
    "partners/savePartner",
    async ({ id, title, logo, website }, { rejectWithValue }) => {
        id = +id.trim();
        title = title.trim();
        logo = logo.trim();
        website = website.trim();

        if (id && title && logo && website) {
            let partnerData = {
                id,
                title,
                logo,
                website,
                isDeleted: false,
            };

            await JsonServerAPI.put(`partners/${id}`, partnerData);

            return partnerData;
        }

        return rejectWithValue("Wrong values");
    }
);

export const deletePartner = createAsyncThunk("partners/deletePartner", async (id, { rejectWithValue }) => {
    let partner = (await JsonServerAPI.get(`partners/${id}`)).data;

    if (partner) {
        partner.isDeleted = true;

        await JsonServerAPI.put(`partners/${id}`, partner);

        return id;
    }

    return rejectWithValue("Partner not found.");
});

export const addPartner = createAsyncThunk(
    "partners/addPartner",
    async ({ title, logo, website }, { rejectWithValue }) => {
        title = title.trim();
        logo = logo.trim();
        website = website.trim();

        if (title && logo && website) {
            let partnerData = {
                id: Date.now(),
                title,
                logo,
                website,
                isDeleted: false,
            };

            return await JsonServerAPI.post("partners", partnerData);
        }

        return rejectWithValue("Wrong values given");
    }
);
