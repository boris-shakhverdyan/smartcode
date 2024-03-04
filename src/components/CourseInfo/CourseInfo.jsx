import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCourse } from "../../store/slices/courses/coursesSlice";
import { motion } from "framer-motion";
import useAnimations from "../../utils/Animations/useAnimations";
import { fetchCourseByName } from "../../store/slices/courses/coursesApi";
import classes from "./CourseInfo.module.css";
import { useTranslation } from "react-i18next";

const CourseInfo = () => {
    const { t } = useTranslation("courses");

    const { scaleAnimationVariant } = useAnimations();
    const selectedCourse = useSelector(selectCourse);

    const { name } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            dispatch(fetchCourseByName(name));
        })();
    }, [name, dispatch]);

    if (!selectedCourse) {
        return null;
    }

    return (
        <motion.div
            className={`container mb-footer mt-20 ${classes.course_info_container}`}
            initial="hidden"
            whileInView="visible"
            {...scaleAnimationVariant(1)}
        >
            <div className={classes.course_image}>
                <img
                    src={selectedCourse.posters.small}
                    alt={selectedCourse.name}
                />
            </div>
            <div className={classes.bottom}>
                <div className={classes.info}>
                    <h1>{t(selectedCourse.shortTitle)}</h1>
                    <h2>{t(selectedCourse.title)}</h2>
                    <p>{t(selectedCourse.subtitle)}</p>
                    <p>{t(selectedCourse.mainTitle)}</p>
                    {selectedCourse.description.stages.first ||
                    selectedCourse.description.stages.second ||
                    selectedCourse.description.stages.third ||
                    selectedCourse.description.stages.forth ? (
                        <ul>
                            <li>{selectedCourse.description.stages.first}</li>
                            <li>{selectedCourse.description.stages.second}</li>
                            <li>{selectedCourse.description.stages.third}</li>
                            <li>{selectedCourse.description.stages.forth}</li>
                        </ul>
                    ) : null}
                    <p>
                        {t("content", {
                            duration: selectedCourse.duration,
                            price: selectedCourse.price,
                            credit: selectedCourse.credit,
                        })}
                    </p>
                    <p>{t("offer")}</p>
                </div>
                <div className={classes.body_image}>
                    <img
                        src={selectedCourse.posters.big}
                        alt={selectedCourse.title}
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default CourseInfo;
