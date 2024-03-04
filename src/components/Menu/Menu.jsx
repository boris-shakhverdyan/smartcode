import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { GiSpellBook, GiStarFormation } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import { ReactComponent as SmartCodeLogo } from "../../assets/images/logo.svg";
import { useTranslation } from "react-i18next";
import Flags from "../Flags/Flags";
import classes from "./Menu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, selectAuthUser } from "../../store/slices/auth/authSlice";

const Menu = () => {
    const authUser = useSelector(selectAuthUser);
    const [darkMode, setDarkMode] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const handleScroll = () =>
            window.scrollY ? setDarkMode(true) : setDarkMode(false);

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const { t } = useTranslation("menu");
    const logout = () => {
        dispatch(logoutUser());
    };

    return (
        <div className={`${classes.menu} ${darkMode && classes.dark}`}>
            <header className={`container ${classes.header}`}>
                <div className={classes.wrapper}>
                    <div className={classes.logo}>
                        <NavLink to="/">
                            <SmartCodeLogo
                                title="SmartCode logo"
                                className={!darkMode ? "black" : undefined}
                            ></SmartCodeLogo>
                        </NavLink>
                    </div>
                    <nav>
                        {/* <div
                            className={`${classes.hamburger} ${
                                darkMode && classes.dark
                            }`}
                        >
                            <FaBars />
                        </div> */}
                        <div
                            className={`${classes.links} ${
                                darkMode && classes.dark
                            }`}
                        >
                            <NavLink to="/courses">
                                {t("menu.courses")}
                                <GiSpellBook />
                            </NavLink>
                            <NavLink to="/features">
                                {t("menu.features")}
                                <GiStarFormation />
                            </NavLink>
                            <NavLink to="/staff">
                                {t("menu.staff")}
                                <FaPeopleGroup />
                            </NavLink>
                            <NavLink to="/about">
                                {t("menu.about")}
                                <FaInfoCircle />
                            </NavLink>
                        </div>
                    </nav>
                </div>
                <div className={classes.globe}>
                    <Flags />
                </div>
                <div className={classes.socials}>
                    {!authUser ? (
                        <NavLink to={"/login"}>Login</NavLink>
                    ) : (
                        <>
                            {authUser.type === "admin" ? (
                                <NavLink to={"/dashboard"}>Dashboard</NavLink>
                            ) : (
                                <NavLink to={"/profile"}>Profile</NavLink>
                            )}
                            <NavLink onClick={logout}>Logout</NavLink>
                        </>
                    )}
                </div>
            </header>
        </div>
    );
};

export default Menu;
