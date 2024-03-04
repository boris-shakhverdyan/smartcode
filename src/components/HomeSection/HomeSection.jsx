import React from "react";
import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";
import trainers from "../../assets/videos/trainers.mp4";
import useAnimations from "../../utils/Animations/useAnimations";
import Partners from "../Partners/Partners";
import classes from "./HomeSection.module.css";

const HomeSection = () => {
    const { t } = useTranslation("menu");

    const { scaleAnimationVariant, topAnimationVariant } = useAnimations();
    return (
        <motion.section
            className={`container mb-footer ${classes.section_cont}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <motion.h2 {...topAnimationVariant(1)}>
                {t(`homeSection.title`)}
            </motion.h2>
            <div className={classes.section}>
                <div className={classes.section_text}>
                    <motion.p {...scaleAnimationVariant(2)}>
                        {t(`homeSection.body`)}
                    </motion.p>
                </div>
                <motion.div
                    className={classes.section_video_cont}
                    {...scaleAnimationVariant(3)}
                >
                    <video
                        disablePictureInPicture
                        src={trainers}
                        autoPlay
                        loop
                        muted
                    />
                </motion.div>
            </div>

            <Partners />
        </motion.section>
    );
};

export default HomeSection;
