import React, { useRef } from "react";
import { motion } from "framer-motion";
import classes from "./AboutMain.module.css";
import PlayBtn from "../PlayBtn/PlayBtn";
import useAnimations from "../../utils/Animations/useAnimations";
const AboutMain = ({ title, firstP, secondP, video, image }) => {
    const videoRef = useRef(null);

    const { opacityAnimationVariant, blurAnimationVariant } = useAnimations();
    return (
        <motion.main
            className={classes.main}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            {...opacityAnimationVariant(1)}
        >
            <div className={classes.main_left}>
                {image ? (
                    <img src={image} alt={image} />
                ) : (
                    <video src={video} ref={videoRef} autoPlay loop muted />
                )}
                <div className={classes.btn}>
                    {image ? null : <PlayBtn videoRef={videoRef} />}
                </div>
            </div>
            <div className={classes.main_right}>
                <motion.div
                    className={classes.about}
                    {...blurAnimationVariant(2)}
                >
                    <h2>{title}</h2>
                    <p>{firstP}</p>
                    {secondP ? <p>{secondP}</p> : null}
                </motion.div>
            </div>
        </motion.main>
    );
};

export default AboutMain;
