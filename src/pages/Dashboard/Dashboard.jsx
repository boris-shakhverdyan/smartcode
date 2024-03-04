import { useSelector } from "react-redux";
import classes from "./Dashboard.module.css";
import { selectAuthUser } from "../../store/slices/auth/authSlice";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    const authUser = useSelector(selectAuthUser);

    return (
        <div className={`section ${classes.dashboard}`}>
            <div className={classes.sidebar}>
                <h1>Dashboard</h1>
                <header>
                    <h3>{authUser.firstName + " " + authUser.lastName}</h3>
                </header>
                <div className={classes.routeList}>
                    <NavLink
                        to={"/dashboard/courses"}
                        className={({ isActive }) => (isActive ? classes.active : null)}
                    >
                        Courses
                    </NavLink>
                    <NavLink
                        to={"/dashboard/features"}
                        className={({ isActive }) => (isActive ? classes.active : null)}
                    >
                        Features
                    </NavLink>
                    <NavLink
                        to={"/dashboard/partners"}
                        className={({ isActive }) => (isActive ? classes.active : null)}
                    >
                        Partners
                    </NavLink>
                </div>
            </div>
            <div className={classes.content}>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
