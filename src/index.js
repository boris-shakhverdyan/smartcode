import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./i18n";
import Loading from "./components/Loading/Loading";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <App />
            </Suspense>
        </BrowserRouter>
    </Provider>
);
