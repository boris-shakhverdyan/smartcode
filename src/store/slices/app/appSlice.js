import { createSlice } from "@reduxjs/toolkit";
import i18n from "../../../i18n";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isLoading: false,
        modal: {
            isShow: false,
            title: null,
            body: null,
            actionBtn: {
                text: null,
                callback: null,
                color: null,
            },
        },
        supportedLanguages: [`hy`, `ru`, `en`],
        lang: +localStorage.getItem("lang") || 0,
    },
    reducers: {
        setIsLoading(state, { payload }) {
            state.isLoading = payload;
        },
        showModal(
            state,
            {
                payload: {
                    title,
                    body,
                    actionBtnText,
                    actionBtnCallback,
                    actionBtnType = "default",
                },
            }
        ) {
            state.modal = {
                isShow: true,
                title,
                body,
                actionBtn: {
                    text: actionBtnText,
                    callback: actionBtnCallback,
                    type: actionBtnType,
                },
            };
        },
        hideModal(state) {
            state.modal = {
                isShow: false,
                title: null,
                body: null,
            };
        },
        changeLang(state) {
            state.lang =
                state.lang + 1 > state.supportedLanguages.length - 1
                    ? 0
                    : state.lang + 1;
            localStorage.setItem("lang", state.lang);
            i18n.changeLanguage(state.supportedLanguages[state.lang]);
        },
        setLang(state, { payload }) {
            state.lang = state.supportedLanguages.indexOf(payload);
            i18n.changeLanguage(payload);
        },
    },
});

export const selectIsLoading = (state) => state.app.isLoading;
export const selectModal = (state) => state.app.modal;
export const selectModalStatus = (state) => state.app.modal.isShow;
export const selectLang = (state) => state.app.lang;

export const { setIsLoading, showModal, hideModal, changeLang, setLang } =
    appSlice.actions;

export const appReducer = appSlice.reducer;
