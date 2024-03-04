import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import classes from "./CourseCard.module.css";

const CourseCard = ({ name, posters, shortTitle, price, duration }) => {
    const { t } = useTranslation("menu");

    return (
        <div className={classes.course_card}>
            <div className={classes.course}>
                <div className={classes.card_top}>
                    <img src={posters.small} alt={shortTitle} />
                </div>
                <div className={classes.card_middle}>
                    <h2>{shortTitle}</h2>
                    <div className={classes.overview}>
                        <span>{price} ֏</span>
                        <span>{`${duration} ամիս`} </span>
                    </div>
                </div>
                <div className={classes.card_bottom}>
                    <Link to={`/courses/${name}`}>{t(`courses`)}</Link>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
