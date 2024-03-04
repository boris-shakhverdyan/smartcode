import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectAuthUser } from "../../store/slices/auth/authSlice";

const RouteMiddleware = ({ admin = false, user = false, guest = false }) => {
    const authUser = useSelector(selectAuthUser);

    if (
        (admin && authUser && authUser.type === "admin") ||
        (user && authUser && authUser.type === "user") ||
        (guest && !authUser)
    ) {
        return <Outlet />;
    }

    return (
        <Navigate
            to={authUser ? (authUser.type === "admin" ? "/dashboard" : "/profile") : "/login"}
            replace
        />
    );
};

export default RouteMiddleware;
