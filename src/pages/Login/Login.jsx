import { useDispatch, useSelector } from "react-redux";
import classes from "./Login.module.css";
import { fetchAuthUser } from "../../store/slices/auth/authApi";
import { useState } from "react";
import { selectAuthError } from "../../store/slices/auth/authSlice";

const Login = () => {
    const [status, setStatus] = useState("typing");
    const error = useSelector(selectAuthError);
    const dispatch = useDispatch();

    const submitHandle = (e) => {
        e.preventDefault();

        const username = e.target.username.value.trim();
        const password = e.target.password.value.trim();

        setStatus("sending");
        dispatch(fetchAuthUser({ username, password })).finally(() => setStatus("sent"));
    };

    return (
        <div className={`mb-footer section ${classes.wrapper}`}>
            <form className={`${classes.login}`} onSubmit={submitHandle}>
                {status === "sending" && (
                    <div className={classes.loadingWrapper}>
                        <span className={classes.loader}></span>
                    </div>
                )}
                {error && <div className={classes.error}>{error}</div>}
                <input
                    type="text"
                    autoComplete="off"
                    name="username"
                    placeholder="Username"
                    required
                    minLength={5}
                />
                <input type="password" name="password" placeholder="Password" required minLength={5} />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
