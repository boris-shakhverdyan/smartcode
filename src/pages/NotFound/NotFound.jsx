import { Link } from "react-router-dom";

import notFound from "../../assets/images/notfound.jpg";
import classes from "./NotFound.module.css";

const NotFound = () => {
    return (
        <div className={classes.notFound}>
            <Link to={"/"}>
                <img src={notFound} alt="notfound" />
            </Link>
        </div>
    );
};

export default NotFound;
