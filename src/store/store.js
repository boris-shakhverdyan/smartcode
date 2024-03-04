import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./slices/app/appSlice";
import { coursesReducer } from "./slices/courses/coursesSlice";
import { featuresReducer } from "./slices/features/featuresSlice";
import { partnersReducer } from "./slices/partners/partnersSlice";
import { authReducer } from "./slices/auth/authSlice";

export const store = configureStore({
    reducer: {
        app: appReducer,
        auth: authReducer,
        courses: coursesReducer,
        features: featuresReducer,
        partners: partnersReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
