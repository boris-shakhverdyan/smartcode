import React, { useRef } from "react";
import { motion } from "framer-motion";

import useAnimations from "../../utils/Animations/useAnimations";

import first from "../../assets/images/1.jpg";
import sec from "../../assets/images/2.jpg";
import third from "../../assets/images/3.jpg";
import fivth from "../../assets/images/4.jpg";
import sixth from "../../assets/images/5.jpg";
import bgVideo from "../../assets/videos/banner.mp4";

import classes from "./HeaderGridImages.module.css";
const HeaderGridImages = ({ videoStopRef, videoSectionRef }) => {
    const { rightAnimationVariant, opacityAnimationVariant } = useAnimations();

    const videoRef = useRef();
    const videoWrapperRef = useRef();
    const sectionRef = useRef();

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const startScalePosition = 30;
        const endScalePosition = 300;

        if (
            videoRef.current &&
            videoSectionRef.current &&
            videoStopRef.current
        ) {
            let videoStopRect = videoStopRef.current.getBoundingClientRect();

            if (
                videoWrapperRef.current.offsetTop &&
                videoStopRect &&
                videoWrapperRef.current.offsetParent.offsetTop
            ) {
                let res =
                    videoSectionRef.current.offsetHeight -
                    (videoWrapperRef.current.offsetTop +
                        videoWrapperRef.current.offsetParent.offsetTop +
                        112.5);
                res =
                    res +
                    (videoSectionRef.current.offsetHeight / 2 + 112.5 / 2);

                const stopPosition = res;

                if (scrollPosition > startScalePosition) {
                    let scale =
                        1 +
                        (scrollPosition - startScalePosition) /
                            (endScalePosition - startScalePosition);

                    scale = scale > 3 ? 3 : scale;

                    videoRef.current.style.transform = `translateX(0%)translateY(${
                        scrollPosition > stopPosition
                            ? stopPosition
                            : scrollPosition
                    }px) scale(${scale})`;

                    if (videoRef.current.paused && videoRef.current.play) {
                        videoRef.current.play();
                    }
                } else {
                    videoRef.current.style.transform = "translateY(0) scale(1)";
                    videoRef.current.currentTime = 0;

                    if (!videoRef.current.paused && videoRef.current.pause) {
                        videoRef.current.pause();
                    }
                }
            }
        }
    };

    window.addEventListener("scroll", handleScroll);

    return (
        <motion.div {...opacityAnimationVariant(1)} ref={sectionRef}>
            <motion.div className={classes.list} {...rightAnimationVariant(1)}>
                <img
                    className={classes.first_image}
                    src={third}
                    alt="smartcode"
                />
                <img
                    className={classes.second_image}
                    src={first}
                    alt="smartcode"
                />
                <img
                    className={classes.third_image}
                    src={sec}
                    alt="smartcode"
                />
                <div className={classes.forth_image} ref={videoWrapperRef}>
                    <video
                        disablePictureInPicture
                        ref={videoRef}
                        src={bgVideo}
                        muted
                    ></video>
                </div>
                <img
                    className={classes.fivth_image}
                    src={fivth}
                    alt="smartcode"
                />
                <img
                    className={classes.sixth_image}
                    src={sixth}
                    alt="smartcode"
                />
            </motion.div>
        </motion.div>
    );
};

export default HeaderGridImages;
