import React, { useState, useRef } from "react";
import { BsFillVolumeUpFill, BsFillVolumeMuteFill } from "react-icons/bs";

import classes from "./PlayBtn.module.css";
const PlayBtn = ({ videoRef }) => {
    const [isPlaying, setIsPlaying] = useState(true);
    const buttonRef = useRef();

    const handlePlayVideo = () => {
        if (isPlaying) {
            videoRef.current.currentTime = 0;
            videoRef.current.muted = false;
            setIsPlaying(false);
        } else {
            videoRef.current.muted = true;
            setIsPlaying(true);
        }
    };

    return (
        <button
            className={classes.btn}
            ref={buttonRef}
            onClick={handlePlayVideo}
        >
            {isPlaying ? <BsFillVolumeMuteFill /> : <BsFillVolumeUpFill />}
        </button>
    );
};

export default PlayBtn;
