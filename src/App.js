import { useEffect } from "react";

import { useLocation } from "react-router-dom";

import Router from "./Router";
import { useDispatch } from "react-redux";
import { setAuthUser } from "./store/slices/auth/authSlice";

function App() {
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        if (localStorage.getItem("user")) {
            dispatch(setAuthUser(JSON.parse(localStorage.getItem("user"))));
        }
    }, [dispatch]);

    useEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);

    
        return <Router />
}

export default App;
