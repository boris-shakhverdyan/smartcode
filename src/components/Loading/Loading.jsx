import React from "react";

import classes from "./Loading.module.css";

const Loading = () => {
    return (
        <div className={classes.loading}>
            <span class={classes.loader}></span>
        </div>
    );
};

export default Loading;
